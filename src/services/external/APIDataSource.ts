import { AlbumApi, CircleApi, Configuration, OriginalAlbumApi, TrackApi } from 'app/backend-service-api';
import { Album, AlbumOrderOptions, AlbumSortField, SortOrder } from 'src/models/domain/Album';
import { Circle } from 'src/models/domain/Circle';
import { Track } from 'src/models/domain/Track';
import { DataSource } from '../domain/DataSource';
import ApiConfigurationProvider from '../domain/ApiConfigurationProvider';
import { OriginalTrack } from 'src/models/domain/OriginalTrack';
import { OriginalAlbum } from 'src/models/domain/OrigianlAlbum';

export class APIDataSource implements DataSource {
  public configurationProvider: ApiConfigurationProvider<Configuration>;

  constructor(configurationProvider: ApiConfigurationProvider<Configuration>) {
    this.configurationProvider = configurationProvider;
  }

  public async getCircle(circleId: string): Promise<Circle> {
    const circleApi = new CircleApi(this.configurationProvider.getApiConfiguration());

    const circle = await circleApi.getCircleById({
      id: circleId,
    });

    return Circle.fromCircleReadDto(circle);
  }

  public async getCircles(start: number, limit: number): Promise<Circle[]> {
    const circleApi = new CircleApi(this.configurationProvider.getApiConfiguration());

    const circles = await circleApi.getCircles({
      start,
      limit,
    });

    return circles.map(Circle.fromCircleReadDto);
  }

  public async getAlbum(albumId: string): Promise<Album> {
    const albumApi = new AlbumApi(this.configurationProvider.getApiConfiguration());

    const album = await albumApi.getAlbum({
      id: albumId,
    });

    return Album.fromAlbumReadDto(album);
  }

  public async getAlbums(start: number, limit: number, sortOrder: SortOrder, sortField: AlbumSortField): Promise<{
    albums: Album[];
    total: number;
    count: number;
  }> {
    const albumApi = new AlbumApi(this.configurationProvider.getApiConfiguration());

    const albums = await albumApi.getAlbums({
      start,
      limit,
      sortOrder,
      sort: sortField,
    });

    return {
      albums: albums.albums?.map(Album.fromAlbumReadDto) || [],
      count: albums.count || 0,
      total: albums.total || 0,
    };
  }

  public async getTrack(trackId: string): Promise<Track> {
    const trackApi = new TrackApi(this.configurationProvider.getApiConfiguration());

    const track = await trackApi.getTrack({
      id: trackId,
    });

    return Track.fromTrackReadDto(track);
  }

  public async getOriginalAlbums(start: number, limit: number): Promise<OriginalAlbum[]> {
    const originalAlbumApi = new OriginalAlbumApi(this.configurationProvider.getApiConfiguration());

    const originalAlbums = await originalAlbumApi.getOriginalAlbums({
      start,
      limit,
    });

    return originalAlbums.map(OriginalAlbum.fromOriginalAlbumReadDto);
  }

  public async getOriginalTracks(start: number, limit: number): Promise<OriginalTrack[]> {
    const originalTrackApi = new OriginalAlbumApi(this.configurationProvider.getApiConfiguration());

    const originalTracks = await originalTrackApi.getOriginalTracks({
      start,
      limit,
    });

    return originalTracks.map(OriginalTrack.fromOriginalTrackReadDto);
  }
}