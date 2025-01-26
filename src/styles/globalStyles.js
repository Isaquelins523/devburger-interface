import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Poppins", serif;
        font-weight: 400;
        font-style: normal;
    }


    body {
        width: 100vw;
        max-width: 100vw;

        height: 100vh;
        min-height: 100vh;
    }

    #root {
        width: 100%;
        height: 100%;
    }

    button, a {
        cursor: pointer;
    }
`;

export default globalStyles;
