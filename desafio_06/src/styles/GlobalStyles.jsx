import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --brand-color: #97edaa;

        --dark-10: #0b0b0b;
        --dark-20: #101010;
        --dark-30: #1f1f1f;

        --white: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Archivo", sans-serif;
        background-color: var(--dark-10);
    }

    a {
        cursor: pointer;
        color: var(--white);
        text-decoration: none;
    }

    button {
        border: none;
        background-color: transparent;
        font-size: 1.6rem;
        font-weight: 600;
    }

    .container {
        max-width: 121.6rem;
        margin: 0 auto;
    }
`;

export default GlobalStyles