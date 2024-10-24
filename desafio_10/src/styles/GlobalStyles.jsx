import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --brand-color: #996830;

        --dark: #2c2c2c;

        --gray: #d9d9d6;

        --white: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Outfit", sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Playfair Display", serif;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        width: 100%;
    }

    button {
        border: none;
        cursor: pointer;
    }

    .container {
        max-width: 121.6rem;
        margin: 0 auto;
    }
`;

export default GlobalStyles;
