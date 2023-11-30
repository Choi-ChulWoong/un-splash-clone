import styled from '@emotion/styled';
import { Common } from '@/styles/Common';

export const MasonlyItemBase = styled.div`
  width: 32%;
  height: max-content;
  & > img {
    width: 100%;
    height: auto;
  }
`;
export const OverLayContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 20px;
  transition: box-shadow 0.2s;
`;
export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
`;

interface ButtonProps {
  isActive: boolean;
}
export const CollectionButton = styled.button`
  width: 40px;
  height: 32px;
  background-color: ${(props: ButtonProps) =>
    props.isActive ? Common.colors.green_50 : 'white'};
  opacity: 0.9;
  transition: opacity 0.2s;
  border-radius: 4px;

  &:hover {
    opacity: 1;
  }
`;
