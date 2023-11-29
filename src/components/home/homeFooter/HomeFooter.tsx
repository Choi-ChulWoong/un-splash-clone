import styled from '@emotion/styled';
import { Common } from '@/styles/Common';

const HomeFooterBase = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
  border-top: 1px solid ${Common.colors.gray_100};
  background-color: white;
`;

function HomeFooter() {
  return <HomeFooterBase>Un-splash Footer.</HomeFooterBase>;
}

export default HomeFooter;
