import styled from '@emotion/styled';
import { Common } from '@/styles/Common';

export const DailyCollectionBase = styled.div`
  min-width: 280px;
  min-height: 280px;
  border: 1px solid ${Common.colors.gray_100};
  border-radius: 10px;
  padding: 20px;
`;
export const DailyTagsHeader = styled.header`
  width: 100%;
  margin-bottom: 12px;
`;
export const DailyTagItem = styled.button`
  border: 1px solid ${Common.colors.gray_200};
  background-color: white;
  padding: 3px 8px;
  border-radius: 8px;
  color: ${Common.colors.gray_300};

  &:hover {
    border: 1px solid ${Common.colors.gray_400};
    color: ${Common.colors.gray_400};
  }
`;
