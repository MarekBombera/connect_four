'use client'
import { createGlobalStyle } from 'styled-components'
import { font } from './typography.style'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;

  }
  html {
    font-size: 62.5%;

  }
  body {
    margin: 0;
    font: 400 1.6rem ${font.base};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;

  }
  
  a {
  color: inherit;
  text-decoration: none;
}
`
