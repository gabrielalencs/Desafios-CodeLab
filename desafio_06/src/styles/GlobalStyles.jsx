import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --brand-color: #97edaa;

        --dark-10: #0b0b0b;
        --dark-20: #101010;
        --dark-30: #1f1f1f;

        --white: #ffffff;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Archivo", sans-serif;
    }
`;

export default GlobalStyles