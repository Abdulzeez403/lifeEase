
import { UserContextProvder } from "@/module/auth/UserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (



    <UserContextProvder>
      <Component {...pageProps} />
    </UserContextProvder>


  );
}
