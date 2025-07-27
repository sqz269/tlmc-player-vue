import type { SortOrder, TrackOrderOptions } from 'app/backend-service-api';
import type { TrackQueryFilters } from 'src/models/TrackQueryFilters';

export interface TrackListViewInputModel {
  filters?: TrackQueryFilters;

  page: number;
  sortOrder: SortOrder;
  sortField: TrackOrderOptions;
}
