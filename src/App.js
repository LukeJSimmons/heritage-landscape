import './App.css';

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Services />
    </div>
  );
}

export default App;
