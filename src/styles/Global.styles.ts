import { css } from '@emotion/react';
import { Common } from '@/styles/Common';
import { SpoqaHanSans } from '@/styles/Fonts';

export const globalStyles = css`
  html,
  body {
    font-size: 16px;
    user-select: none;
    height: auto;
    -webkit-tap-highlight-color: transparent;
    font-family: ${SpoqaHanSans.style.fontFamily};
  }

  main {
    position: relative;
    margin: 0 auto;
    max-width: ${Common.screen.width};
  }
`;
