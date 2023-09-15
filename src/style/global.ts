import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-300: rgba(43, 215, 74);
    --purple-600: #12B57F;
    --purple-900: #78DEC0;

    --font-black: #1c1c1c;
    --font-white: #fff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    @media(max-width: 1080px) {
        font-size: 93.75%;
    }
    @media(max-width: 720px) {
        font-size: 87.5%;
    }
} 

div {
    
}

`;
