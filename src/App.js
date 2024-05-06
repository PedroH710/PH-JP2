import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import Home from './home';
import QuemSomos from './quemsomos';
import Contato from './contatos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/quemsomos' element={<QuemSomos/>}/>
          <Route path='/Contato' element={<Contato/>}/>
          </Routes>
          <Footer/>
        </header>
      </div>
    </Router>
  );
}

export default App;