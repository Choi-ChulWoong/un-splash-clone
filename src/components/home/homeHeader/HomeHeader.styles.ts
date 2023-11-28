import styled from '@emotion/styled';
import { Common } from '@/styles/Common';

export const HeaderBase = styled.header`
  padding: 60px 20px;
  display: flex;
  gap: 24px;
  margin: 0 auto;
  max-width: ${Common.screen.width};
`;
export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
`;

export const HeaderDescription = styled.p`
  margin-top: 8px;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  line-height: 1.5;
`;
