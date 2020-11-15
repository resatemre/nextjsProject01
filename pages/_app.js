import Footer from '../siteComponents/Footer';
import Navbar from '../siteComponents/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Navbar />
         <Component {...pageProps} />
         <Footer />
      </>
   );
}

export default MyApp;
