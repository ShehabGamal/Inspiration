import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contactinfo from './Components/Contactinfo';
import './App.css';

function App() {
  return (
    <div className="App" id="Home">
     <Header/>
     <Home />
     <About/>
     <Services/>
     <Portfolio/>
     <Contactinfo/>
    </div>
  );
}

export default App;
