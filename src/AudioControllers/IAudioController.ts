interface IAudioController {
  get isPlaying(): boolean | null;

  get volume(): number;
  set volume(value: number);

  get progress(): number;
  set progress(value: number);

  get paused(): boolean;

  pause(): void;
  resume(): void;
  togglePause(): void;

  playTrack(src: string): void;

  seek(value: number): void;

  destroy(): void;
}

export default IAudioController;
