import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

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

    .container {
        max-width: 121.6rem;
        margin: 0 auto;
    }
`;

export default GlobalStyles;
