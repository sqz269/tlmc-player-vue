import { TimeSpan } from 'app/backend-service-api/src/models/TimeSpan';

export class Timespan {
  private _duration: number;

  constructor(duration: number) {
    this._duration = duration;
  }

  public toSeconds(): number {
    return this._duration;
  }

  public toDurationString(): string {
    const hours = Math.floor(this._duration / 3600);
    const minutes = Math.floor((this._duration % 3600) / 60);
    const seconds = this._duration % 60;

    const mmss = `${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;

    // Only show hours if it's greater than 0
    return hours > 0 ? `${hours}:${mmss}` : mmss;
  }

  public static add(a: Timespan, b: Timespan): Timespan {
    return new Timespan(a._duration + b._duration);
  }

  public static subtract(a: Timespan, b: Timespan): Timespan {
    return new Timespan(a._duration - b._duration);
  }

  public static zero(): Timespan {
    return new Timespan(0);
  }

  public static fromSeconds(seconds: number): Timespan {
    // Truncate to integer
    seconds = Math.floor(seconds);
    return new Timespan(seconds);
  }

  public static fromDurationString(durationString: string): Timespan {
    const [hours, minutes, seconds] = durationString.split(':').map(Number);
    return new Timespan(hours * 3600 + minutes * 60 + seconds);
  }

  public static fromTimespan(timespan: TimeSpan): Timespan {
    return new Timespan(timespan.seconds!);
  }
}
