import { AlbumSortField, SortOrder } from 'src/models/domain/Album';
export default interface AlbumListGridViewInputModel {
  page: number;
  sortOrder: SortOrder;
  sortField: AlbumSortField;
}
