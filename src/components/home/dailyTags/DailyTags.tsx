import React from 'react';
import * as S from '@/components/home/dailyTags/DailyTags.styles';

function DailyTags() {
  return (
    <S.DailyCollectionBase>
      <S.DailyTagsHeader>인기 태그</S.DailyTagsHeader>
      <ul>
        <li>
          <S.DailyTagItem>사이버 보안</S.DailyTagItem>
        </li>
      </ul>
    </S.DailyCollectionBase>
  );
}

const MemoizedDailyTags = React.memo(DailyTags);

export default MemoizedDailyTags;
