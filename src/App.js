import './App.css'
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import QuemSomos from './components/QuemSomos/QuemSomos';
import Campanhas from './components/Campanhas/Campanhas'
import Contato from './components/Contato/Contato'
import Doacoes from './components/Doacoes/Doacoes';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <nav>
          <Link to='/'>Quem Somos</Link>
          <Link to='/Campanhas'>Campanhas</Link>
          <Link to='/Contato'>Contato</Link>
          <Link to='/Doacoes'>Doações</Link>
        </nav>

        <Routes>
          <Route path="/" element={<QuemSomos />} />
          <Route path="/Campanhas" element={<Campanhas />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Doacoes" element={<Doacoes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
