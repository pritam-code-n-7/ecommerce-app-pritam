import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>e-commerce spa for fmcg products</title>
        <meta
          name="description"
          content="This is a Single Page Application featuring Header, Body, and Footer components"
        />
        <meta name="keywords" content="Header, Footer, Body" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://e-commerce-app-seven-sigma.vercel.app/"
        />
      </Helmet>
      <div>
        <Header />
        <main role="main">
          <Body />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
