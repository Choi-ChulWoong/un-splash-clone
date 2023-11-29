import styled from '@emotion/styled';
import { Common } from '@/styles/Common';

const RetryButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: ${Common.screen.width};
  background-color: black;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 12px 0;
`;

export default RetryButton;
