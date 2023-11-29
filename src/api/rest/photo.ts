import { fetchFunc } from '@/api/api';

export interface productsPagingPayload {
  page: number;
  view: number;
}

export const getPhotosAPI = () => {
  return fetchFunc({ url: '/photos' });
};
export const getPhotosInfiniteAPI = (payload: productsPagingPayload) => {
  return fetchFunc({
    url: `/photos/infinite?page=${payload?.page}&view=${payload?.view}`,
  });
};
