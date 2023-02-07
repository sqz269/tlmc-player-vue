import {AlbumApi, TrackReadDto} from 'app/backend-service-api';
import {AudioController} from 'src/utils/AudioController';
import {audioController} from 'boot/audioController';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';
import {audioEvents, queueEvents} from "boot/eventBus";
import {uuidv4} from "src/utils/Utils";

class QueuedTrack {
  private readonly queueItemId: string;
  private readonly track: TrackReadDto;
  private readonly index: number;
  private readonly srcPlaylist: string | null;

  get ItemId() { return this.queueItemId; }
  get Index() { return this.index; }
  get Track() { return this.track; }

  constructor(index: number, track: TrackReadDto, srcPlaylist: string | null=null) {
    this.queueItemId = uuidv4();
    this.index = index;
    this.track = track;
    this.srcPlaylist = srcPlaylist;
  }
}

class QueueController {
  private static _instance: QueueController | null = null;
  private _index = 0;
  private _songHistory: QueuedTrack[] = [];
  private _queue: QueuedTrack[] = [];
  private _currentlyPlaying: QueuedTrack | null = null;

  private _albumApi: AlbumApi;

  private _audioController: AudioController;

  private constructor() {
     const apiConfig = ApiConfigProvider.getInstance().getApiConfig();

    this._albumApi = new AlbumApi(apiConfig);
    this._audioController = audioController;
  }

  public init() {
    audioEvents.playbackCompleted.on(() => {
      this.playNext();
    })
  }

  get queue(): QueuedTrack[] {
    return this._queue;
  }

  get currentlyPlaying(): QueuedTrack | null {
    return this._currentlyPlaying;
  }
  set currentlyPlaying(value: QueuedTrack | null) {
    const prev = this.currentlyPlaying;
    this._currentlyPlaying = value;

    queueEvents.currentPlayingChanged({prev: prev, curr: this.currentlyPlaying});
  }

  get songHistory(): QueuedTrack[] {
    return this._songHistory;
  }

  public addToHistory(item: QueuedTrack, position=-1) {
    const prev = [...this.songHistory];

    if (position == -1) {
      this._songHistory.push(item);
    } else {
      this._songHistory.splice(position, 0, item);
    }

    queueEvents.historyChanged({ prev, curr: this.songHistory });
  }

  public removeFromHistory(position=-1) : QueuedTrack | undefined {
    const prev = [...this.songHistory];

    let rm: QueuedTrack | undefined;
    if (position == -1) {
      rm = this._songHistory.pop();
    }
    else {
      rm = this._songHistory.splice(position, 1)[0];
    }

    queueEvents.historyChanged({ prev, curr: this.songHistory });
    return rm;
  }

  public addToQueue(item: QueuedTrack, position=-1) {
    const prev = [...this.queue];

    if (position == -1)
    {
      this._queue.push(item);
    } else {
      this._queue.splice(position, 0, item);
    }

    queueEvents.queueChanged({ prev, curr: this.queue });
  }

  public addToQueueBatch(item: QueuedTrack[], position=-1) {
    const prev = [...this.queue];

    if (position == -1)
    {
      this._queue.push(...item);
    } else {
      this._queue.splice(position, 0, ...item);
    }

    queueEvents.queueChanged({ prev, curr: this.queue });
  }

  public removeFromQueue(position=-1): QueuedTrack | undefined {
    const prev = [...this._queue]

    let rm: QueuedTrack | undefined;
    if (position == -1) {
      rm = this._queue.pop();
    }
    else {
      rm = this._queue.splice(position, 1)[0];
    }

    queueEvents.queueChanged({ prev, curr: this.queue });
    return rm;
  }

  public removeQueuedItem(itemId: string): QueuedTrack | undefined {
    // Is the removed item currently playing?
    if (this.currentlyPlaying?.ItemId === itemId) {
      this.playNext();
    }

    // Check queue
    let index: number | undefined;
    this.queue.forEach((e, idx) => {
      if (e.ItemId === itemId) {
        index = idx;
      }
    });

    if (index !== undefined) {
      return this.removeFromQueue(index);
    }

    // Check History
    this.songHistory.forEach((e, idx) => {
      if (e.ItemId === itemId) {
        index = idx;
      }
    });

    if (index !== undefined) {
      return this.removeFromHistory(index);
    }
  }

  public playNext(pushCurrentToQueue=false) {
    if (this.currentlyPlaying !== null) {
      if (!pushCurrentToQueue) {
        this.addToHistory(this.currentlyPlaying);
      } else {
        this.addToQueue(this.currentlyPlaying, 1);
      }
    }

    if (this._queue.length === 0) {
      if (this.currentlyPlaying === null) {
        return;
      }
      this.currentlyPlaying = null;
    }

    const song = this.removeFromQueue(0);

    if (song === undefined) {
      this.currentlyPlaying = null;
      this._audioController.unload();
      return;
    }
    this._audioController.playTrack(<string>song.Track.trackFile?.url);
    this.currentlyPlaying = song;
  }

  public playPrevious() {
    if (this.songHistory.length === 0) {
      return;
    }

    this.addToQueue(this.removeFromHistory()!, 0);

    this.playNext(true);
  }

  // TODO: Add checks to ensure track have all the properties we need
  public addTrackToQueue(track: TrackReadDto, position: number, srcPlaylist: string | undefined=undefined) {
    const queueItem = new QueuedTrack(this._index, track, srcPlaylist)
    this._index++;
    this.addToQueue(queueItem, position)
  }

  // TODO: Add checks to ensure track have all the properties we need
  public addTracksToQueue(track: TrackReadDto[], position: number, srcPlaylist: string | undefined=undefined) {
    const queueItems: QueuedTrack[] = []

    track.forEach(t => {
      queueItems.push(new QueuedTrack(this._index, t, srcPlaylist));
      this._index++;
    })

    this.addToQueueBatch(queueItems, position)
  }

  /**
   * Add a single track to the queue given the track id
   *
   * NOTE: If you want to add multiple track at once, consider use the addTrackToQueueByIdBatch method
   * as race condition will happen in this method and the final order of the tracks added are not
   * guaranteed
   *
   * @param trackId The track id to add to the queue
   * @param addToFront Add the track to the front of the queue so the next song that will be played is the added track
   * @param playImmediately Play the added track immediately
   *                        pushing currently playing (if any), to history, only valid with addToFront set to true
   */
  public async addTrackToQueueById(trackId: string, addToFront = false, playImmediately=false) {
    const trackData = await this._albumApi.getTrack({ id : trackId });
    if (addToFront) {
      this.addTrackToQueue(trackData, 0);
      if (playImmediately) {
        this.playNext();
      }
    } else {
      this.addTrackToQueue(trackData, -1);
    }
  }

  /**
   * Add multiple tracks to the queue given a list of track ids
   *
   * @param trackIds The list track id to add to the queue
   * @param addToFront Add the track to the front of the queue so the next song that will be played is the added track
   * @param playImmediately Play the added track immediately
   *                        pushing currently playing (if any), to history, only valid with addToFront set to true
   */
  public async addTrackToQueueByIdBatch(trackIds: string[], addToFront: boolean, playImmediately=false) {
    const tracks: TrackReadDto[] = []
    for (const trackId of trackIds) {
      const trackData = await this._albumApi.getTrack({id: trackId});
      tracks.push(trackData);
    }

    if (!addToFront) {
      this.addTracksToQueue(tracks, -1);
      return;
    }

    this.addTracksToQueue(tracks, 0);

    if (playImmediately) {
      this.playNext();
    }
  }

  public addTrackToQueueByObj(track: TrackReadDto) {
    if (track.trackFile === undefined || track.album === undefined) {
      throw new Error('Invalid track object to add to queue. Track missing property \"trackFile\" or \"album\"');
    }

    this.addTrackToQueue(track, -1);
  }

  public static getInstance() : QueueController {
    if (this._instance === null) {
      this._instance = new QueueController();
    }

    return this._instance;
  }
}

export {
  QueueController,
  QueuedTrack
}
