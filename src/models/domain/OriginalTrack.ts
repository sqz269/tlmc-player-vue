import { OriginalTrackReadDto } from 'app/backend-service-api/src';
import { LocalizedEntry } from './LocalizedEntry';
import { OriginalAlbum } from './OrigianlAlbum';

export class OriginalTrack {
  public id: string;
  public title: LocalizedEntry;
  public album?: OriginalAlbum;

  constructor(id: string, title: LocalizedEntry, album?: OriginalAlbum) {
    this.id = id;
    this.title = title;
    this.album = album;
  }

  public static fromOriginalTrackReadDto(
    originalTrackReadDto: OriginalTrackReadDto
  ) {
    return new OriginalTrack(
      originalTrackReadDto.id!,
      LocalizedEntry.fromLocalizedField(originalTrackReadDto.title!),
      originalTrackReadDto.album
        ? OriginalAlbum.fromOriginalAlbumReadDto(originalTrackReadDto.album)
        : undefined
    );
  }
}
