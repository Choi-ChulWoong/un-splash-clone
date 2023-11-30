import styled from '@emotion/styled';

const ErrorBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  width: max-content;
  padding: 20px;
  text-align: center;
  & div {
    margin-bottom: 50px;
  }
  & h3 {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  & p {
    font-size: 1rem;
  }
`;

export default ErrorBox;
