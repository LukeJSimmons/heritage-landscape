import Banner from '../components/banner/Banner';
import Services from '../components/services/Services';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

function HomePage() {
  return (
    <>
      <Banner/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default HomePage;
