import "@/styles/globals.css";

import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <div style={{ minHeight: "100vh", minwidth: "100vw", overflow: "auto" }}>
      <div style={{ marginLeft: "1.5rem", marginRight: "1.5rem" }}>
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
