import { useCallback } from 'react';
import photoStore from '@/store/photoStore';

const usePhotoFunc = () => {
  const { photoIds, removeId, addId } = photoStore();

  const handleAddCollection = useCallback((id: string) => addId(id), [addId]);

  const handleRemoveCollection = useCallback(
    (id: string) => removeId(id),
    [removeId],
  );

  const isOnCollection = useCallback(
    (id: string) => {
      return photoIds.some((i) => i === id);
    },
    [photoIds],
  );

  return { handleAddCollection, handleRemoveCollection, isOnCollection };
};

export default usePhotoFunc;
