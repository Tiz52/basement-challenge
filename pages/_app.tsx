import type {AppProps} from "next/app";

import {CartProvider, UiProvider} from "../context";

import "../css/global.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <UiProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </UiProvider>
    </>
  );
}
export default App;
