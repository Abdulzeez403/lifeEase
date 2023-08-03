import { AppContextProvider } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Notification from "@/components/toast/notify";
export default function App({ Component, pageProps }: AppProps) {
  return (
<<<<<<< HEAD

    <UserContextProvder>
      <Component {...pageProps} />
      <Notification />
    </UserContextProvder>


=======
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
>>>>>>> 2e995d5b1da2b2a4a323e84982f47f8352bba8af
  );
}
