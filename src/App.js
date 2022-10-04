import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AutoCar from './components/AutoCar';
import GatorTrade from './components/GatorTrade';
import TankGame from './components/TankGame';
import ClamJam from './components/ClamJam';


function App() {
  return (
    <Router>
    <Routes>
      <Route path ="/"                         element = {<Home/>}/>
      <Route path = "/Projects"                element = {<Projects/>}/>
      <Route path = "/Contact"                 element = {<Contact/>}/>
      <Route path = "/Projects/Autonomous-Car" element = {<AutoCar/>}/>
      <Route path = "/Projects/Gator-Trade"    element = {<GatorTrade/>}/>
      <Route path = "/Projects/Clam-Jam"       element = {<ClamJam/>}/>
      <Route path = "/Projects/Tank-Game"      element = {<TankGame/>}/>
      
    </Routes>
  </Router>
  );
}

export default App;
