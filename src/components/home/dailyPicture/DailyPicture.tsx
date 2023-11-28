import React from 'react';
import Image from 'next/image';
import * as S from '@/components/home/dailyPicture/DailyPicture.styles';

function DailyPicture() {
  return (
    <S.DailyPictureBase>
      <S.OverlayContainer>
        <span>추천</span>
        <S.UserLink>Jigar Panchal</S.UserLink>
      </S.OverlayContainer>
      <Image
        width={280}
        height={280}
        src="https://images.unsplash.com/photo-1699100329878-7f28bb780787?h=280&w=280&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAxMDU0MTE4fA&ixlib=rb-4.0.3"
        alt="recommend picture"
      />
    </S.DailyPictureBase>
  );
}

const MemoizedDailyPicture = React.memo(DailyPicture);

export default MemoizedDailyPicture;
