import styled from '@emotion/styled';
import { Common } from '@/styles/Common';
import usePhotosInfiniteQuery from '@/hooks/query/usePhotosInfiniteQuery';
import React from 'react';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import MasonlyItem from '@/components/home/masonlyItem/MasonlyItem';
import usePhotoFunc from '@/hooks/home/usePhotoFunc';

const HomeSectionBase = styled.section`
  position: relative;
  padding: 0 20px;
  margin: 0 auto 70px;
  max-width: ${Common.screen.width};
`;

function HomeSection() {
  const {
    data: pageData,
    fetchNextPage,
    hasNextPage,
  } = usePhotosInfiniteQuery();

  const { handleAddCollection, handleRemoveCollection, isOnCollection } =
    usePhotoFunc();

  return (
    <HomeSectionBase>
      <MasonryInfiniteGrid
        className="container"
        gap={26}
        resizeDebounce={10}
        column={3}
        percentage={true}
        onRequestAppend={() => hasNextPage && fetchNextPage()}
      >
        {pageData.pages.flatMap((page) => {
          return page.data?.map((item, idx) => {
            return (
              <MasonlyItem
                key={item.id}
                photoData={item}
                onAddCollection={handleAddCollection}
                onRemoveCollection={handleRemoveCollection}
                isCollection={isOnCollection}
              />
            );
          });
        })}
      </MasonryInfiniteGrid>
    </HomeSectionBase>
  );
}

export default HomeSection;
