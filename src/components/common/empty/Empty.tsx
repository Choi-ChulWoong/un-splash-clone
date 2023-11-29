import React from 'react';
import styled from '@emotion/styled';

const EmptyBase = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  font-size: 1rem;
  font-weight: normal;
`;

interface EmptyProps {
  children?: React.ReactNode;
}

function Empty({ children }: EmptyProps) {
  return <EmptyBase>{children}</EmptyBase>;
}
export default Empty;
