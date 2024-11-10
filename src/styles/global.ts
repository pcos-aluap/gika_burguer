import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: none;
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Mukta Vaani", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body:not(.elementor-editor-active) .elementor-widget-menu-anchor {
   position: relative;
   z-index: -1;
 }
 body:not(.elementor-editor-active) .elementor-menu-anchor:before {
   content: "";
   display: block;
   height: 100px; // fixed header height
   margin: -100px 0 0; // negative fixed header height
   visibility: hidden;
   pointer-events: none;
 }
`