import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
body{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Noto Sans', sans-serif;
}

h1{
    color:${ ({theme}) => theme.colors.heading_color };
}

`;