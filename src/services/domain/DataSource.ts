import { Album } from 'src/models/domain/Album';
import { Circle } from 'src/models/domain/Circle';
import { Track } from 'src/models/domain/Track';

export interface DataSource {
  getCircle: (circleId: string) => Promise<Circle>;
  getAlbum: (albumId: string) => Promise<Album>;
  getTrack: (trackId: string) => Promise<Track>;
}
