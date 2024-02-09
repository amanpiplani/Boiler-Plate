import { Provider } from "react-redux";
import { store } from "../store/Store";
import FullLayout from "../src/layouts/FullLayout";
import BlankLayout from "../src/layouts/BlankLayout";
import Head from "next/head";
import "../styles/style.scss";
import "../data/";

const layouts = {
  Blank: BlankLayout,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || FullLayout;
  console.warn = () => {}
  return (
    <Provider store={store}>
      <Head>
        <title>Ample Horizontal Next Js App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
