import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: ${(props) => props.theme.bgColor};
        --color-text: ${(props) => props.theme.fgColor};
        --element-color: ${(props) => props.theme.boxBgColor};
        --input-fieldBg: ${(props) => props.theme.inputBox};
        --input-placeholder: ${(props) => props.theme.inputBoxPlaceholder};
        --shadow-dark: 0 0 15px rgba(0, 0, 0, .2);
    }

    ::placeholder {
        color: var(--input-placeholder);
        font-size: 2rem;
        font-weight: 300;
    }

    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 50%;
        font-family: 'Nunito Sans', sans-serif;

        @media screen and (min-width: 500px) {
            font-size: 62.5%;
        }
    }

    #root {
        background-color: var(--color-primary);
        width: 100%;
        min-height: 100vh;
    }
`;