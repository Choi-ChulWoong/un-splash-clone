import styled from '@emotion/styled';
import { Common } from '@/styles/Common';
import usePhotosInfiniteQuery from '@/hooks/query/usePhotosInfiniteQuery';
import React, { useEffect } from 'react';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import Image from 'next/image';

const HomeSectionBase = styled.section`
  position: relative;
  padding: 0 20px;
  margin: 0 auto 70px;
  max-width: ${Common.screen.width};
`;

const MasonryImageList = styled.div`
  width: 100%;
  & img {
    width: 32%;
    height: auto;
  }
`;

function HomeSection() {
  const {
    data: pageData,
    fetchNextPage,
    hasNextPage,
  } = usePhotosInfiniteQuery();

  return (
    <HomeSectionBase>
      <MasonryImageList>
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
                <Image
                  data-grid-groupkey={item.id}
                  key={item.id}
                  width={400}
                  height={306}
                  src={item.urls.regular}
                  alt={item.alt_description ?? 'image'}
                  priority={idx === 0}
                />
              );
            });
          })}
        </MasonryInfiniteGrid>
      </MasonryImageList>
    </HomeSectionBase>
  );
}

export default HomeSection;
