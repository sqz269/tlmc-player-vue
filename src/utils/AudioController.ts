import { Howl } from 'howler';
import {ref, watch} from 'vue';
import {Action, Func} from 'src/utils/HelperType';

class AudioController {
  private howl: Howl | null = null;
  private playbackId: number | undefined;

  public volume = ref<number>(1);
  public progress = ref<number>(0);

  public paused = ref<boolean>(false);
  private pauseSave: number | undefined;

  private onComplete: Action[] = [];
  private onTick: Func[] = [];

  private progressTicker;

  public constructor() {
    if (!Howler.codecs('flac')) {
      alert('Your browser doesn\'t support FLAC')
    }

    watch(this.volume, () => {
      this.onVolumeChanged();
    })

    watch(this.paused, () => {
      if (this.howl === null) {
        return;
      }

      if (this.paused.value === true) {
        this.pauseSave = this.howl.seek(this.playbackId);
        this.howl.pause()
      }
      else {
        this.howl.play(this.playbackId)
        this.howl.seek(<number>this.pauseSave, this.playbackId);
      }
    })

    this.progressTicker = setInterval(() => {
      if (this.howl === null ||
          this.paused.value === true ||
          this.playbackId === undefined)
        return;

      const pos = this.howl?.seek(this.playbackId);
      if (pos === undefined) {
        return;
      }

      this.onTick.forEach(a => {
        a(pos);
      });
    }, 100);
  }

  private onVolumeChanged() {
    if (this.howl !== null) {
      this.howl.volume(this.volume.value)
    }
  }

  public unload() {
    if (this.howl !== null) {
      this.howl.unload();
      this.paused.value = false
      this.progress.value = 0;
      this.pauseSave = 0;
      this.playbackId = undefined;
    }
  }

  public playTrack(src: string) {
    this.unload()

    this.howl = new Howl({
      src: src,
      format: ['flac'],
      volume: this.volume.value,
      autoplay: true,
      onend: () => {
        this.onComplete.forEach(a => {a()});
      }
    })
    this.playbackId = this.howl.play()
  }

  public onPlaybackComplete(callback: Action) {
    this.onComplete.push(callback);
  }

  public onProgressTick(callback: Func) {
    this.onTick.push(callback);
  }

  public seek(time: number) {
    this.howl?.seek(time, <number>this.playbackId);
  }

  public pause() {
    this.paused.value = true;
  }

  public unpause() {
    this.paused.value = false;
  }

  public togglePause() {
    this.paused.value = !this.paused.value;
  }
}

export {
  AudioController
}
