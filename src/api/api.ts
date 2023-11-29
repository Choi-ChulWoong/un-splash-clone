import { ApiMethod } from '@/types/api';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface fetchFuncParams {
  url: string;
  method?: ApiMethod;
}

export const fetchFunc = ({ url, method = 'GET' }: fetchFuncParams) => {
  return fetch(`${BASE_URL}${url}`, { method })
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
};
