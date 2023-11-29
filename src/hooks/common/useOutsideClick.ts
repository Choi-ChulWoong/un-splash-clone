import { MutableRefObject, useCallback, useEffect } from 'react';

type UseOutsideClick<T> = (
  ref: MutableRefObject<T | null>,
  closeCallback: () => void,
) => void;

const useOutsideClick: UseOutsideClick<HTMLElement> = (ref, callback) => {
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useOutsideClick;
