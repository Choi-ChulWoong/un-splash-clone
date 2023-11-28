import styled from '@emotion/styled';
import { Common } from '@/styles/Common';

export const DailyPictureBase = styled.div`
  position: relative;
  width: 280px;
  min-width: 280px;
  height: 280px;
  min-height: 280px;
  border-radius: 10px;
  overflow: hidden;
`;
export const OverlayContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 20px;
  bottom: 20px;
  color: white;
  font-size: 12px;
  gap: 2px;
`;
export const UserLink = styled.button`
  font-size: 15px;
  color: white;

  &:hover {
    color: ${Common.colors.gray_100};
  }
`;
