import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages & components
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx';
import Over from './pages/Over/Over.jsx';
import Showroom from './pages/Showroom/Showroom.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import CarDetails from './pages/CarDetails/CarDetails.jsx'
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
      <div className='App'>
        <Router basename="/">
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
