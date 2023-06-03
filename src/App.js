import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Issues from './Components/Issues';
import Submissions from './Components/Submissions';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
