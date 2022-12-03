import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Josefin_Sans } from '@next/font/google';

const josefinSans = Josefin_Sans({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={josefinSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
