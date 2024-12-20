import Header from './Components/HEADER/Header';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/FOOTER/Footer';
import Product from './Pages/Product';
import AboutUs from './Pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
   
    
        <BrowserRouter>
        <Header />
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/product" element={<Product />} />
       <Route path="/aboutUs" element={<AboutUs />} />

       </Routes>
        <Footer />
        </BrowserRouter>
    

  );
}

export default App;