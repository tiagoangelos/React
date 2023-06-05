import './index.css';
import './App.css';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App(){
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home to='/' />}></Route>
            <Route path='/empresa' element={<Empresa to='/empresa' />}></Route>
            <Route path='/contato' element={<Contato to='/contato' />}></Route>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
