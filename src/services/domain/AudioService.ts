import { Timespan } from 'src/models/Timespan';
import { DeepReadonly, Ref } from 'vue';

export enum PlaybackEvents { }

export enum AudioEvents { }

export default interface AudioService {
  isPlaying: DeepReadonly<Ref<boolean>>;
  duration: DeepReadonly<Ref<Timespan | null>>;
  position: DeepReadonly<Ref<Timespan | null>>;
  bufferPosition: DeepReadonly<Ref<Timespan | null>>;

  volume: DeepReadonly<Ref<number>>;

  playbackCompletedStream: DeepReadonly<Ref<boolean>>;
  errorStream: DeepReadonly<Ref<string | null>>;

  initialize: () => Promise<void>;

  play: (src: string) => Promise<Timespan>;
  pause: () => Promise<void>;
  togglePause: () => Promise<void>;
  resume: () => Promise<void>;
  stop: () => Promise<void>;

  setVolume: (volume: number) => Promise<void>;
  getVolume: () => Promise<number>;

  seek: (position: Timespan) => Promise<void>;
}
