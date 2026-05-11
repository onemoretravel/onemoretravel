import '../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { LangProvider } from '../context/LangContext';

export default function App({ Component, pageProps }) {
  return (
    <LangProvider>
      <Nav />
      <main className="page-wrapper">
        <Component {...pageProps} />
      </main>
      <Footer />
    </LangProvider>
  );
}
