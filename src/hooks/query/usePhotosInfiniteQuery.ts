import { getPhotosInfiniteAPI } from '@/api/rest/photo';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { PhotoData } from '@/types/photo';

interface Response {
  ok: boolean;
  data?: PhotoData[];
  page?: number;
  totalPage?: number;
  view?: number;
}

const usePhotosInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ['photo', 'paging'],
    queryFn: ({ pageParam }) =>
      getPhotosInfiniteAPI({ page: pageParam, view: 5 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: Response) => {
      const curPage = lastPage?.page;
      const totalPage = lastPage?.totalPage;
      if (!curPage || !totalPage) return undefined;
      return curPage >= totalPage ? undefined : curPage + 1;
    },
  });
};

export default usePhotosInfiniteQuery;
