import styled from '@emotion/styled';
import MasonryImageList from '@/components/home/masonryImageList/MasonryImageList';
import { Common } from '@/styles/Common';

const HomeSectionBase = styled.section`
  position: relative;
  padding: 0 20px;
  margin: 0 auto 70px;
  max-width: ${Common.screen.width};
`;

function HomeSection() {
  return (
    <HomeSectionBase>
      <MasonryImageList />
    </HomeSectionBase>
  );
}

export default HomeSection;
