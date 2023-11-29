import styled from '@emotion/styled';
import { Common } from '@/styles/Common';

export const LoadingBoxBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 60vh;
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid ${Common.colors.gray_100};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
