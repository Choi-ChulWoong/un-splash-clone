import { Global, css } from '@emotion/react';
import { resetStyles } from '@/styles/Reset.styles';
import { globalStyles } from '@/styles/Global.styles';
import { SpoqaHanSans } from '@/styles/Fonts';

const combinedStyles = css`
  ${resetStyles};
  ${globalStyles};
  ${SpoqaHanSans.style};
`;

const GlobalStyle = () => <Global styles={combinedStyles} />;

export default GlobalStyle;
