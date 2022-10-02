import {ref, WatchCallback} from 'vue';
import {AlbumApi, TrackReadDto} from 'app/music-data-service-api';
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
    console.log(this._queue.value)
    console.log('On track add')
    if (this.currentlyPlaying === undefined) {
      this.playNext();
    }
  }

  public playNext() {
    console.log(this._queue.value)
    if (this._queue.value.length === 0) {
      this._currentlyPlaying.value = undefined;
      console.log('PlayNext: Queue is empty')
    }

    const song = this._queue.value.pop();

    if (song === undefined) {
      this._currentlyPlaying.value = undefined;
      this._audioController.unload();
      return;
    }

    this._songHistory.value.push(song);
    this._audioController.playTrack(<string>song.trackFile?.url);
    this._currentlyPlaying.value = song;
    console.log(this._currentlyPlaying)
  }

  public playPrevious() {
    this._queue.value.push(<TrackReadDto>this._songHistory.value.pop());
    this._queue.value.push(<TrackReadDto>this._songHistory.value.pop());

    this.playNext();
  }

  public async addTrackToQueueById(trackId: string) {
    const trackData = await this._albumApi.getTrack({ id : trackId });
    this._queue.value.push(trackData);
    console.log(this._queue.value)
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
