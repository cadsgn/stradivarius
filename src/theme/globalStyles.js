import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }
    body {
        margin: 0;
        font-family: 'Roboto',  sans-serif;
        background-color: #e0e0e0;

    }
`;
 
export default GlobalStyle;