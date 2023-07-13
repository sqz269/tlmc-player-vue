import Hls, {ErrorData, Events} from 'hls.js';
import {audioEvents} from "boot/eventBus";
import IAudioController from "src/AudioControllers/IAudioController";

class AudioControllerHls implements IAudioController {
  private readonly audio: HTMLAudioElement | null
  private readonly hls: Hls | null

  private _volume = 1.0;
  private _progress = 0.0;
  private _paused = true;
  private _isPlaying = false;

  private constructor() {
    if (Hls.isSupported()) {
      this.audio = document.createElement('audio');
      // attach it to the body to make sure it's loaded
      document.body.appendChild(this.audio);
      this.audio.preload = 'auto';
      this.hls = new Hls({debug: false});
      this.attachHlsEventListeners();
      this.attachAudioEventListeners();
    } else {
      console.error('HLS is not supported on this browser');
      alert('HLS is not supported on this browser. Please use a different browser.');
      this.hls = null;
      this.audio = null;
    }
  }

  private onError = (event: Events.ERROR, data: ErrorData) => {
    if (data.fatal) {
      switch (data.type) {
        case Hls.ErrorTypes.NETWORK_ERROR:
          if (data.response?.code === 404) {
            console.error('manifest not found, fatal error');
            return;
          }

          console.error('fatal network error encountered, try to recover');
          console.dir(data);
          break;
        case Hls.ErrorTypes.MEDIA_ERROR:
          console.error('fatal media error encountered, try to recover');
          this.hls?.recoverMediaError();
          break;
        default:
          console.error('unknown error occurred');
          console.dir(data);
          this.hls?.destroy();
          break;
      }
    }
  }

  private attachHlsEventListeners() {
    if (this.hls === null) {
      return;
    }

    this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      console.log('audio and hls.js are now bound together !');
    });

    this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
      console.log('manifest loaded, found ' + data.levels.length + ' quality level');
    });

    this.hls.on(Hls.Events.ERROR, this.onError);
  }

  private attachAudioEventListeners() {
    this.audio?.addEventListener('timeupdate', () => {
      audioEvents.playbackProgressed({prev: this.progress, curr: this.audio?.currentTime ?? 0});
      this._progress = this.audio?.currentTime ?? 0;
    });

    this.audio?.addEventListener('play', () => {
      this.paused = false;
    });

    this.audio?.addEventListener('pause', () => {
      this.paused = true;
    });

    this.audio?.addEventListener('ended', () => {
      this._isPlaying = false;
      audioEvents.playbackCompleted();
    });
  }

  get volume(): number {
    return this._volume;
  }

  set volume(value: number) {
    if (this.audio === null) {
      return;
    }

    this._volume = value;
    this.audio.volume = value;
  }

  get progress(): number {
    return this._progress;
  }

  set progress(value: number) {
    if (this.audio === null) {
      return;
    }

    this._progress = value;
    this.audio.currentTime = value;
  }

  get paused(): boolean {
    return this._paused;
  }

  private set paused(value: boolean) {
    this._paused = value;

    if (this.audio === null) {
      return;
    }

    if (value) {
      this.audio.pause();
      audioEvents.playbackPaused();
    }
    else {
      // check if hls is attached
      if (this.hls?.media === null) {
        return;
      }
      else {
        this.audio.play();
        audioEvents.playbackResumed();
      }
    }
  }

  terminate(): void {
    // stop the currently playing and detach the hls
    this.hls?.stopLoad();
    this.hls?.detachMedia();
    this.audio?.pause();
    this._isPlaying = false;
    audioEvents.playbackCompleted();
  }

  destroy(): void {
    this.hls?.destroy();
    this.audio?.remove();
  }

  get isPlaying(): boolean | null {
    if (this.audio === null) {
      return null;
    }

    return this._isPlaying;
  }

  pause(): void {
    this.paused = true;
  }

  resume(): void {
    this.paused = false;
  }

  togglePause(): void {
    this.paused = !this.paused;
  }

  seek(value: number): void {
    if (this.audio === null) {
      return;
    }

    this.audio.currentTime = value;
  }

  playTrack(src: string): void {
    if (this.hls === null || this.audio === null) {
      return;
    }

    this.hls.stopLoad();
    this.hls.loadSource(src);
    this.hls.attachMedia(this.audio);
    this.audio.play().then(r => {
      this._isPlaying = true;
      audioEvents.playbackStarted();
    });
    this.audio.volume = this.volume;
  }

  private static instance: AudioControllerHls | null = null;
  public static get Instance(): AudioControllerHls {
    if (AudioControllerHls.instance === null) {
      AudioControllerHls.instance = new AudioControllerHls();
    }

    return AudioControllerHls.instance;
  }
}

export default AudioControllerHls;
