import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        width: 100vh;
        height: 100vh;
        background: #f0f2f5;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
`;

export default GlobalStyle;