import SearchInput from '@/components/home/searchInput/SearchInput';
import * as S from '@/components/home/homeHeader/HomeHeader.styles';
import DailyPicture from '@/components/home/dailyPicture/DailyPicture';
import DailyTags from '@/components/home/dailyTags/DailyTags';

function HomeHeader() {
  return (
    <S.HeaderBase>
      <S.SearchContainer>
        <S.HeaderTitle>Un-splash</S.HeaderTitle>
        <S.HeaderDescription>
          un-splash clone 페이지입니다.
          <br />
          비상업적이며 개인적 학습에 목적을 가진 프로젝트입니다.
        </S.HeaderDescription>
        <SearchInput />
      </S.SearchContainer>
      <DailyTags />
      <DailyPicture />
    </S.HeaderBase>
  );
}

export default HomeHeader;
