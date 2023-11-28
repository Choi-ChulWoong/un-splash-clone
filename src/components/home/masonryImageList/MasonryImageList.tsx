import React from 'react';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import Image from 'next/image';
import styled from '@emotion/styled';

const MasonryImageListBase = styled.div`
  width: 100%;
  & img {
    width: 32%;
    height: auto;
  }
`;

function MasonryImageList() {
  const arr = [1, 2, 3, 4, 5];

  return (
    <MasonryImageListBase>
      <MasonryInfiniteGrid
        className="container"
        gap={26}
        resizeDebounce={10}
        column={3}
        percentage={true}
        onRequestAppend={(e) => {
          console.log('infinite callback', e);
        }}
      >
        {arr.map((_, idx) => {
          return (
            <Image
              data-grid-groupkey={idx}
              key={idx}
              width={400}
              height={306}
              src="https://images.unsplash.com/photo-1695653422881-6372da5e29e5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              alt="masonry image"
            />
          );
        })}
      </MasonryInfiniteGrid>
    </MasonryImageListBase>
  );
}

const MemoizedMasonryImageList = React.memo(MasonryImageList);

export default MemoizedMasonryImageList;
