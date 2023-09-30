import "@/styles/globals.css";
import "@/styles/global.scrollStyle.css";
import "@/styles/sidepanel.style.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
