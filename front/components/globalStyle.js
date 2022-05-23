import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'HallymGothic-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    body {
        font-family: "HallymGothic-Regular";
    }
`;

export default GlobalStyle;

