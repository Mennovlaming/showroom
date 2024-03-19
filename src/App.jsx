import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages & components
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';
import Over from './pages/Over/Over';
import Showroom from './pages/Showroom/Showroom';
import Navbar from './components/Navbar/Navbar';
import CarDetails from './pages/CarDetails/CarDetails'
import Footer from './components/Footer/Footer';

function App() {

  return (
      <div className='App'>
        <Router>
        <Navbar />
          <div className='pages'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Showroom/*' element={<Showroom />} />
              <Route path='/Showroom/car/:id' element={<CarDetails />} />
              <Route path='/Over' element={<Over />} />
              <Route path='/Contact' element={<Contact />} />
            </Routes>
           
          </div>
          <Footer />
        </Router>
      </div>
  )
}

export default App


// email knop
// infinite scroll
// andere huisstijl
// prive collectie website, niet zakelijk
//