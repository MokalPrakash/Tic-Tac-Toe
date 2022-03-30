
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Game from './pages/game/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/game"} element={<Game/>}/>
      </Routes>
    </Router>
  );
}

export default App;
