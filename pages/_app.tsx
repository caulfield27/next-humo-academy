import { Provider } from "react-redux";
import store from "@/src/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layouts from "@/src/components/layout/layout";


export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <Provider store={store}>
        <Layouts>
              <Component {...pageProps} />
        </Layouts>
      </Provider>

    </>
  )
}
