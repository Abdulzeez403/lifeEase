
import "@/styles/globals.css";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (

    <div className="w-[100%] overflow-hidden sm:w-[100%] 
    md:w-[80%] md:mx-auto md:justify-center 
    lg:w-[80%] lg:mx-auto lg:justify-center">
    <Component {...pageProps} />
    </div>


  );
}
