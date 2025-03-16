import { AlbumApi, CircleApi, Configuration, TrackApi } from 'app/backend-service-api';
import { Album, AlbumOrderOptions, SortOrder } from 'src/models/domain/Album';
import { Circle } from 'src/models/domain/Circle';
import { Track } from 'src/models/domain/Track';
import { DataSource } from '../domain/DataSource';
import ApiConfigurationProvider from '../domain/ApiConfigurationProvider';

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

  public async getAlbum(albumId: string): Promise<Album> {
    const albumApi = new AlbumApi(this.configurationProvider.getApiConfiguration());

    const album = await albumApi.getAlbum({
      id: albumId,
    });

    return Album.fromAlbumReadDto(album);
  }

  public async getAlbums(page: number, limit: number, sortOrder: SortOrder, sortField: AlbumOrderOptions): Promise<{
    total: number;
    albums: Album[];
    currentPage: number;
    totalPages: number;
  }> {
    const albumApi = new AlbumApi(this.configurationProvider.getApiConfiguration());

    const albums = await albumApi.getAlbums({
      start: page,
      limit,
      sortOrder,
      sort: sortField,
    });

    return {
      total: albums.total || 0,
      albums: albums.albums?.map(Album.fromAlbumReadDto) || [],
      currentPage: page,
      totalPages: Math.ceil((albums.total || 0) / limit),
    };
  }

  public async getTrack(trackId: string): Promise<Track> {
    const trackApi = new TrackApi(this.configurationProvider.getApiConfiguration());

    const track = await trackApi.getTrack({
      id: trackId,
    });

    return Track.fromTrackReadDto(track);
  }
}
