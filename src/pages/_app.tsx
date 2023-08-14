import { AppContextProvider } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Notification from "@/components/toast/notify";
export default function App({ Component, pageProps }: AppProps) {
  return (




    // <UserContextProvder>
    //   <Component {...pageProps} />
    //   <Notification />
    // </UserContextProvder>

    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>

  );
}
