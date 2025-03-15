import { TrackReadDto } from 'app/backend-service-api/src';
import { Timespan } from '../Timespan';
import { Album } from './Album';
import { LocalizedEntry } from './LocalizedEntry';
import { OriginalTrack } from './OriginalTrack';
import GlobalConfiguration from 'src/GlobalConfiguration';
import { Thumbnail } from './Thumbnail';

export class Track {
  public id: string;
  public name: LocalizedEntry;
  public index: number;
  public disc: number;
  public duration: Timespan;
  public genre: string[];
  public staff: string[];
  public arrangement: string[];
  public vocalist: string[];
  public lyricist: string[];
  public original: OriginalTrack[];
  public originalNonTouhou: boolean;
  public album?: Album;
  public hasLyrics: boolean;

  constructor(
    id: string,
    name: LocalizedEntry,
    index: number,
    disc: number,
    duration: Timespan,
    genre: string[],
    staff: string[],
    arrangement: string[],
    vocalist: string[],
    lyricist: string[],
    original: OriginalTrack[],
    originalNonTouhou: boolean,
    hasLyrics: boolean,
    album?: Album
  ) {
    this.id = id;
    this.name = name;
    this.index = index;
    this.disc = disc;
    this.duration = duration;
    this.genre = genre;
    this.staff = staff;
    this.arrangement = arrangement;
    this.vocalist = vocalist;
    this.lyricist = lyricist;
    this.original = original;
    this.originalNonTouhou = originalNonTouhou;
    this.album = album;
    this.hasLyrics = hasLyrics;
  }

  public get Thumbnails(): Thumbnail | null {
    if (this.album) {
      return this.album.thumbnail;
    }

    return null;
  }

  public get AudioUrl(): string {
    return GlobalConfiguration.TRACK_ASSET_BASE_URL.replace('{id}', this.id);
  }

  public static fromTrackReadDto(trackReadDto: TrackReadDto) {
    return new Track(
      trackReadDto.id!,
      LocalizedEntry.fromLocalizedField(trackReadDto.name!),
      trackReadDto.index!,
      trackReadDto.disc!,
      Timespan.fromDurationString(trackReadDto.duration!),
      trackReadDto.genre!,
      trackReadDto.staff!,
      trackReadDto.arrangement!,
      trackReadDto.vocalist!,
      trackReadDto.lyricist!,
      trackReadDto.original!.map((originalTrackReadDto) =>
        OriginalTrack.fromOriginalTrackReadDto(originalTrackReadDto)
      ),
      trackReadDto.originalNonTouhou!,
      trackReadDto.hasLyrics!,
      trackReadDto.album
        ? Album.fromAlbumReadDto(trackReadDto.album)
        : undefined
    );
  }
}
