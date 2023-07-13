
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/First" element={ <First/> } />
        <Route path="/Second" element={ <Second/> } />
        <Route path="/Third" element={ <Third/> } />
      </Routes>
    </Router>
    </div>
  );
}

export default App;