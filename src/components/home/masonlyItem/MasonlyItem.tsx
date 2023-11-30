import Image from 'next/image';
import React, { useMemo } from 'react';
import { PhotoData } from '@/types/photo';
import * as S from '@/components/home/masonlyItem/MasonlyItem.styles';

interface MasonlyItemProps {
  photoData: PhotoData;
  onAddCollection: (id: string) => void;
  onRemoveCollection: (id: string) => void;
  isCollection: (id: string) => boolean;
}

function MasonlyItem({
  photoData,
  onAddCollection,
  onRemoveCollection,
  isCollection,
}: MasonlyItemProps) {
  const isCollectionItem = useMemo(
    () => isCollection(photoData.id),
    [photoData, isCollection],
  );

  return (
    <S.MasonlyItemBase>
      <Image
        data-grid-groupkey={photoData.id}
        width={400}
        height={306}
        src={photoData.urls.regular}
        alt={photoData.alt_description ?? 'image'}
      />
      <S.OverLayContainer>
        <S.ButtonRow>
          <S.CollectionButton
            isActive={isCollectionItem}
            onClick={() =>
              isCollectionItem
                ? onRemoveCollection(photoData.id)
                : onAddCollection(photoData.id)
            }
          >
            <Image
              src={
                isCollectionItem
                  ? 'icons/icon-plus-white.svg'
                  : 'icons/icon-plus.svg'
              }
              alt="plus icon"
              width={14}
              height={14}
            />
          </S.CollectionButton>
        </S.ButtonRow>
      </S.OverLayContainer>
    </S.MasonlyItemBase>
  );
}

const MemoizedMasonlyItem = React.memo(MasonlyItem);
export default MemoizedMasonlyItem;
