import { AlbumApi, CircleApi, Configuration, TrackApi } from 'app/backend-service-api/src';
import { Album } from 'src/models/domain/Album';
import { Circle } from 'src/models/domain/Circle';

export class APIDataSource {
  public configuration: Configuration;
  public circleApi: CircleApi;
  public albumApi: AlbumApi;
  public trackApi: TrackApi;

  constructor(configuration: Configuration) {
    this.configuration = configuration;
    this.circleApi = new CircleApi(configuration);
    this.albumApi = new AlbumApi(configuration);
    this.trackApi = new TrackApi(configuration);
  }

  public async getCircle(circleId: string): Promise<Circle> {
    const circle = await this.circleApi.getCircleById({
      id: circleId,
    });

    return Circle.fromCircleReadDto(circle);
  }

  public async getAlbum(albumId: string): Promise<Album> {
    const album = await this.albumApi.getAlbum({
      id: albumId,
    });

    return Album.fromAlbumReadDto(album);
  }
}

export class APIDataSourceFactory {
  public static create(configuration: Configuration): APIDataSource {
    return new APIDataSource(configuration);
  }
}
