// pages/_app.js

import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
//import Chatbot from '../components/Chatbot';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer logo="/path/to/your/logo.png" />
     {/* <Chatbot /> */}
    </Provider>
  );
}

export default MyApp;
