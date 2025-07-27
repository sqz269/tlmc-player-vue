import type { PlaylistReadDto, TrackReadDto } from 'app/backend-service-api/src';
import type { TrackInfo } from 'src/models/TrackInfo';

export interface PlaylistPageViewModel {
  playlistId: string;
  playlistInfo: PlaylistReadDto;
  playlistTotalTracks: number;
  playlistTracks: TrackReadDto[];
  playlistTracksTransformed: TrackInfo[];
}
