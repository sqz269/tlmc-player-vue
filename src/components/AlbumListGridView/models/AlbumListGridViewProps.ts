import type AlbumListGridViewInputModel from './AlbumListGridViewInputModel';
import type AlbumListGridViewViewModel from './AlbumListGridViewViewModel';

export interface AlbumListGridViewProps {
  transitionFunction: (
    state: AlbumListGridViewInputModel
  ) => Promise<AlbumListGridViewViewModel>;
  initialInputState: AlbumListGridViewInputModel;
}
