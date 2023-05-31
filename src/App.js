import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Issues from './Components/Issues';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issues" element={<Issues />} />
      </Routes>
    </div>
  );
}

export default App;
