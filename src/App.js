import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
