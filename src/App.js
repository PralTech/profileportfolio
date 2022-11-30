import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Component/Navbar/Navbar';
import  Home from './Component/Home/Home' ;
import Services from './Component/Services/Services';
import Work from './Component/Works/Work';
import Portfolio from './Component/Portfolio/Portfolio';
import Testimonials from './Component/Testimonials/Testimonials';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/work' element={<Work />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/Contact' element={<Contact />} />

    </Routes>
    <Footer/>
  </BrowserRouter>

  
}

export default App;
