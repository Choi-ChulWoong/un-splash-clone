import { getPhotosAPI } from '@/api/rest/photo';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PhotoData } from '@/types/photo';

interface Response {
  ok: boolean;
  data?: PhotoData[];
}

const usePhotosQuery = () => {
  return useSuspenseQuery({
    queryKey: ['photo'],
    queryFn: getPhotosAPI,
    select: (response: Response) => response.data,
  });
};

export default usePhotosQuery;
