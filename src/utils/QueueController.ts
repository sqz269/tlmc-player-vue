import {ref, WatchCallback} from 'vue';
import {AlbumApi, TrackReadDto} from 'app/backend-service-api';
import {watch} from 'vue';
import {apiConfig} from 'boot/backend-api';
import {AudioController} from 'src/utils/AudioController';
import {audioController} from 'boot/audioController';

class QueueController {
  private _prevSongHistoryLen: number;
  private _songHistory = ref<TrackReadDto[]>([]);
  private _prevQueueLen: number;
  private _queue = ref<TrackReadDto[]>([]);
  private _currentlyPlaying = ref<TrackReadDto>();

  private _albumApi: AlbumApi;

  private _audioController: AudioController;

  constructor() {
    this._albumApi = new AlbumApi(apiConfig);
    this._audioController = audioController;

    this._prevQueueLen = this._queue.value.length;
    this._prevSongHistoryLen = this._songHistory.value.length;
  }

  public init() {
    this._audioController.onPlaybackComplete(() => {
      this.playNext();
    })

    this.watchQueue(() => {
      const currLength = this._queue.value.length;
      if (currLength > this._prevQueueLen) {
        this.onTrackAdd()
      }
      this._prevQueueLen = currLength;
    });
  }

  get queue(): TrackReadDto[] {
    return this._queue.value;
  }

  get currentlyPlaying(): TrackReadDto | undefined {
    return this._currentlyPlaying.value;
  }

  get songHistory(): TrackReadDto[] {
    return this._songHistory.value;
  }

  public watchQueue(func: WatchCallback<TrackReadDto[] | undefined, TrackReadDto[] | undefined>) {
    watch(this._queue, func, { deep: true });
  }

  public watchCurrentlyPlaying(func: WatchCallback<TrackReadDto | undefined, TrackReadDto | undefined>) {
    watch(this._currentlyPlaying, func);
  }

  public watchSongHistory(func: WatchCallback<TrackReadDto[] | undefined, TrackReadDto[] | undefined>) {
    watch(this._songHistory, func, { deep: true });
  }

  private onTrackAdd() {
    console.log('Current Queue')
    console.log(this._queue.value)
    if (this.currentlyPlaying === undefined) {
      this.playNext();
    }
  }

  public playNext() {
    console.log("PlayNext Invoked")
    console.log(this._queue.value)
    if (this.currentlyPlaying !== undefined) {
      this._songHistory.value.push(this.currentlyPlaying);
    }

    if (this._queue.value.length === 0) {
      console.log('PlayNext: Queue is empty')
      if (this.currentlyPlaying === undefined) {
        return;
      }
      this._currentlyPlaying.value = undefined;
    }

    const song = this._queue.value.splice(0, 1)[0];

    if (song === undefined) {
      this._currentlyPlaying.value = undefined;
      this._audioController.unload();
      return;
    }
    console.log(`Invoking playTrack with ${JSON.stringify(song)}`)
    this._audioController.playTrack(<string>song.trackFile?.url);
    this._currentlyPlaying.value = song;
  }

  public playPrevious() {
    this._queue.value.push(<TrackReadDto>this._songHistory.value.pop());
    this._queue.value.push(<TrackReadDto>this._songHistory.value.pop());

    this.playNext();
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
    console.log("Adding Track by Id")
    console.log(trackData);
    if (addToFront) {
      this._queue.value.splice(0, 0, trackData);
      if (playImmediately) {
        this.playNext();
      }
    } else {
      this._queue.value.push(trackData);
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
      this._queue.value.push(...tracks);
      return;
    }

    this._queue.value.splice(0, 0, ...tracks);

    if (playImmediately) {
      this.playNext();
    }
  }

  public addTrackToQueueByObj(track: TrackReadDto) {
    if (track.trackFile === undefined || track.album === undefined) {
      throw new Error('Invalid track object to add to queue. Track missing property \"trackFile\" or \"album\"');
    }

    this._queue.value.push(track);
  }
}

export {
  QueueController
}
