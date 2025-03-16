import { ExtOriginalAlbumReadDto } from 'app/backend-service-api/src';
import { LocalizedEntry } from './LocalizedEntry';

export class OriginalAlbum {
  public id: string;
  public type: string;
  public fullName: LocalizedEntry;
  public shortName: LocalizedEntry;

  constructor(
    id: string,
    type: string,
    fullName: LocalizedEntry,
    shortName: LocalizedEntry
  ) {
    this.id = id;
    this.type = type;
    this.fullName = fullName;
    this.shortName = shortName;
  }

  public static fromOriginalAlbumReadDto(
    originalAlbumReadDto: ExtOriginalAlbumReadDto
  ) {
    return new OriginalAlbum(
      originalAlbumReadDto.id!,
      originalAlbumReadDto.type!,
      LocalizedEntry.fromLocalizedField(originalAlbumReadDto.fullName!),
      LocalizedEntry.fromLocalizedField(originalAlbumReadDto.shortName!)
    );
  }
}
