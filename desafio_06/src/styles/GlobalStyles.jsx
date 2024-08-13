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
    }

    .container {
        max-width: 121.6rem;
        margin: 0 auto;
    }



    /* input[type = "checkbox"] {
        -webkit-appearance: none;
        display: none;
        visibility: hidden;
    }

    .bar {
        display: block;
        position: relative;
        cursor: pointer;
        top: 7px;
        width: 50px;
        height: 40px;
    }

    .bar span {
        position: absolute;
        width: 35px;
        height: 5px;
        background: var(--brand-color);
        border-radius: 100px;
        display: inline-block;
        transition: 0.3s ease;
        left: 0;
    }

    .bar span.top {
        top: 0;
    }

    .bar span.middle {
        top: 13px;
    }

    .bar span.bottom {
        bottom: 9px;
    }

    input[type]:checked ~ span.top {
        transform: rotate(45deg);
        transform-origin: top left;
        width: 35px;
        left: 5px;
    }

    input[type]:checked ~ span.bottom {
        transform: rotate(-45deg);
        transform-origin: top left;
        width: 36px;
        bottom: 9px;
        box-shadow: 0 0 10px #495057;
    }

    input[type]:checked ~ span.middle {
        transform: translateX(-20px);
        opacity: 0;
    } */
`;

export default GlobalStyles