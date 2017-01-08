import { injectGlobal } from 'styled-components';
import vars from './variables';

/* eslint-disable */

injectGlobal`
  html {
    /*
     * Prevent certain mobile browsers from automatically zooming fonts
     */
    -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    /*
     * fonts on OSX will look more consistent with other systems that do not
     * render text using sub-pixel anti-aliasing.
     */
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;
    line-height: 1.4;
    font-size: 16px;
    padding: 2rem;
  }

  a {
    color: ${vars.colors.secondary};
  }
`;
