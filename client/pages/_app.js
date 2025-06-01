import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import CartContextProvider from "@/components/CartContext";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap');
  body{
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
    background-color: #1f1f1f;
    margin-top: 60px;  
  }
`;

export default function App({ Component, pageProps }) {

  return (
    <>
      <GlobalStyles/>
      <CartContextProvider>
              <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
