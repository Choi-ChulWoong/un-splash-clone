import React from 'react';
import styled from '@emotion/styled';
import { Common } from '@/styles/Common';
import Image from 'next/image';

const SearchInputBase = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  margin-top: 50px;
  background-color: ${Common.colors.gray_100};
  border-radius: 8px;
  padding-left: 14px;
  gap: 12px;
  &:hover {
    background-color: ${Common.colors.gray_50};
  }
  & input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

function SearchInput() {
  return (
    <SearchInputBase>
      <Image
        src="/icons/icon-search.svg"
        alt="search icon"
        width={20}
        height={20}
      />
      <input type="text" placeholder="이미지 검색" />
    </SearchInputBase>
  );
}

const MemoizedSearchInput = React.memo(SearchInput);
export default MemoizedSearchInput;
