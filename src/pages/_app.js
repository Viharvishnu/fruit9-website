import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import { Caveat, Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FooterCredits from "@/components/footer-credits";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleAnalytics from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
        .heading {
          font-family: ${caveat.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
      <ToastContainer className="absolute" />
      <Footer />
      <FooterCredits />
      <GoogleAnalytics />
    </>
  );
}
