import type { TrackQueryFilters } from 'src/models/TrackQueryFilters';
import type { DeepReadonly, Ref } from 'vue';

export default interface RadioService {
  isActive: DeepReadonly<Ref<boolean>>;
  filters: DeepReadonly<Ref<TrackQueryFilters | null>>;
  seed: DeepReadonly<Ref<string | null>>;

  initialize: () => Promise<void>;
  setFilters: (filters: TrackQueryFilters | null) => Promise<void>;
  activate: () => Promise<void>;
  deactivate: () => Promise<void>;
  toggle: () => Promise<void>;
}
