import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
 body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
 }

 .swiper-pagination-bullet{
  background-color: #000000!important;
  width: 12px;
  height: 12px;
 }

 .swiper-pagination-bullet-active {
     background-color: #929292!important;
     width: 12px;
     height: 12px;
}
`
