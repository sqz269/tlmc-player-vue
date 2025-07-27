import type { CircleReadDto, OriginalAlbumReadDto, OriginalTrackReadDto } from 'app/backend-service-api/dist';
import type { LoadableState } from 'src/utils/Loadable/LoadableController';

export default interface GlobalStaticDataProvider {
  initialize(): Promise<void>;

  originalAlbums: LoadableState<OriginalAlbumReadDto[]>;
  originalTracks: LoadableState<OriginalTrackReadDto[]>;

  circles: LoadableState<CircleReadDto[]>;
}
