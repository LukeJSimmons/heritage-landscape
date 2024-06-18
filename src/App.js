import './App.css';

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
