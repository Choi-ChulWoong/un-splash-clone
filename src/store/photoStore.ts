import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface StoreState {
  photoIds: string[];
}
interface StoreActions {
  setIds: (ids: string[]) => void;
  addId: (id: string) => void;
  removeId: (id: string) => void;
  removeIds: (ids: string[]) => void;
  clearState: () => void;
}

interface PhotoStore extends StoreState, StoreActions {}

type setState<T> = (set: T) => void;
type setStateFunc<T> = (set: (state: T) => T) => void;

const _removeId = (id: string, ids: string[]): string[] => {
  const set = new Set(ids);
  set.delete(id);
  return Array.from(set);
};

const _removeIds = (ids: string[], storeIds: string[]): string[] => {
  const idsMap: Record<string, string> = ids.reduce(
    (map: Record<string, string>, id) => {
      map[id] = id;
      return map;
    },
    {},
  );
  return storeIds.filter((i) => !idsMap[i]);
};

const _initialState: StoreState = {
  photoIds: [],
};

const store = (
  set: setState<StoreState> & setStateFunc<StoreState>,
): PhotoStore => ({
  ..._initialState,
  setIds: (ids: string[]) => set({ photoIds: ids }),
  addId: (id: string) =>
    set((state) => ({ photoIds: [...state.photoIds, id] })),
  removeId: (id: string) =>
    set((state) => ({ photoIds: _removeId(id, state.photoIds) })),
  removeIds: (ids: string[]) =>
    set((state) => ({ photoIds: _removeIds(ids, state.photoIds) })),
  clearState: () => set({ ..._initialState }),
});

const photoStore = create<PhotoStore>()(
  devtools(store, { name: 'PhotoStore' }),
);

export default photoStore;
