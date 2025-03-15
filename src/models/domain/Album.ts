import { AlbumReadDto } from 'app/backend-service-api/src';
import { Circle } from './Circle';
import { LocalizedEntry } from './LocalizedEntry';
import { Track } from './Track';
import { Thumbnail } from './Thumbnail';

export class Album {
  public id: string;
  public name: LocalizedEntry;
  public releaseDate: Date;
  public releaseConvention: string;
  public catalogNumber: string;
  public numberOfDiscs: number;
  public discNumber: number;
  public discName: string;
  public website: string[];
  public albumArtist?: Circle[];
  public dataSource: string[];
  public tracks?: Track[];
  public childAlbums?: Album[];
  public parentAlbum?: Album;
  public thumbnail: Thumbnail;
  // otherFiles: Asset[];

  constructor(
    id: string,
    name: LocalizedEntry,
    releaseDate: Date,
    releaseConvention: string,
    catalogNumber: string,
    numberOfDiscs: number,
    discNumber: number,
    discName: string,
    website: string[],
    dataSource: string[],
    albumArtist?: Circle[],
    tracks?: Track[],
    childAlbums?: Album[],
    parentAlbum?: Album,
    thumbnail?: Thumbnail
  ) {
    this.id = id;
    this.name = name;
    this.releaseDate = releaseDate;
    this.releaseConvention = releaseConvention;
    this.catalogNumber = catalogNumber;
    this.numberOfDiscs = numberOfDiscs;
    this.discNumber = discNumber;
    this.discName = discName;
    this.website = website;
    this.dataSource = dataSource;
    this.albumArtist = albumArtist;
    this.tracks = tracks;
    this.childAlbums = childAlbums;
    this.parentAlbum = parentAlbum;
    this.thumbnail = thumbnail ?? new Thumbnail();
  }

  public get Thumbnails(): Thumbnail | null {
    if (this.thumbnail) {
      return this.thumbnail;
    }

    // check if we are a child album
    if (this.parentAlbum && this.parentAlbum.Thumbnails) {
      return this.parentAlbum.Thumbnails;
    }

    // check child albums
    for (const childAlbum of this.childAlbums ?? []) {
      if (childAlbum.Thumbnails) {
        return childAlbum.Thumbnails;
      }
    }

    return null;
  }

  public static fromAlbumReadDto(albumReadDto: AlbumReadDto): Album {
    return new Album(
      albumReadDto.id!,
      LocalizedEntry.fromLocalizedField(albumReadDto.name!),
      albumReadDto.releaseDate!,
      albumReadDto.releaseConvention!,
      albumReadDto.catalogNumber!,
      albumReadDto.numberOfDiscs!,
      albumReadDto.discNumber!,
      albumReadDto.discName!,
      albumReadDto.website!,
      albumReadDto.dataSource!,
      albumReadDto.albumArtist!.map((albumArtistReadDto) =>
        Circle.fromCircleReadDto(albumArtistReadDto)
      ),
      albumReadDto.tracks!.map((trackReadDto) =>
        Track.fromTrackReadDto(trackReadDto)
      ),
      albumReadDto.childAlbums!.map((childAlbumReadDto) =>
        Album.fromAlbumReadDto(childAlbumReadDto)
      ),
      albumReadDto.parentAlbum
        ? Album.fromAlbumReadDto(albumReadDto.parentAlbum)
        : undefined,
      albumReadDto.thumbnail
        ? Thumbnail.fromThumbnailReadDto(albumReadDto.thumbnail)
        : undefined
    );
  }
}
