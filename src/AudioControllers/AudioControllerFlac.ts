import { Howl } from 'howler';
import {Action, Func} from 'src/utils/HelperType';
import {audioEvents} from "boot/eventBus";
import {audioController} from "boot/audioController";
import IAudioController from "src/AudioControllers/IAudioController";

class AudioControllerFlac implements IAudioController {
  private howl: Howl | null = null;
  private playbackId: number | undefined;

  private _volume = 1;
  private _progress = 0;

  private _paused = false;
  private _pauseSave: number | undefined;

  private progressTicker;

  public constructor() {
    if (!Howler.codecs('flac')) {
      alert('Your browser doesn\'t support FLAC')
    }

    this.progressTicker = setInterval(() => {
      if (this.howl === null || this.paused ||
          this.playbackId === undefined)
        return;


      const pos = this.howl?.seek(this.playbackId);
      if (pos === undefined) {
        return;
      }

      this.progress = pos;
    }, 100);
  }

  resume(): void {
    this.unpause();
  }
  destroy(): void {
    this.unload();
  }

  get volume(): number {
    return this._volume;
  }

  set volume(value: number) {
    const prev = this.volume;
    this._volume = value;

    if (this.howl !== null) {
      this.howl.volume(this._volume);
    }

    audioEvents.volumeChanged({prev: prev, curr: this.volume});
  }
  get progress(): number {
    return this._progress;
  }

  set progress(value: number) {
    const prev = this.progress;
    this._progress = value;

    audioEvents.playbackProgressed({prev: prev, curr: this.progress});
  }

  get paused(): boolean {
    return this._paused;
  }

  private set paused(value) {
    const prev = this.paused;
    this._paused = value;

    if (this.howl === null) {
      return;
    }
    if (this.paused) {
      this._pauseSave = this.howl.seek(this.playbackId);
      this.howl.pause()
      audioEvents.playbackPaused();
    }
    else {
      this.howl.play(this.playbackId)
      this.howl.seek(<number>this._pauseSave, this.playbackId);
      audioEvents.playbackResumed();
    }
    audioEvents.playbackStateChanged({prev:prev, curr:this.paused});
  }

  public unload() {
    if (this.howl !== null) {
      this.howl.unload();
      this.unpause()
      this.progress = 0;
      this._pauseSave = 0;
      this.playbackId = undefined;
    }
  }

  public playTrack(src: string) {
    this.unload()

    this.howl = new Howl({
      src: src,
      format: ['flac'],
      volume: this.volume,
      autoplay: true,
      onend: () => {
        audioEvents.playbackCompleted();
      }
    })
    this.playbackId = this.howl.play()
  }

  public seek(time: number) {
    this.howl?.seek(time, <number>this.playbackId);
  }

  public pause() {
    this.paused = true;
  }

  public unpause() {
    this.paused = false;
  }

  public togglePause() {
    this.paused = !this.paused;
  }
}

export {
  AudioControllerFlac
}
