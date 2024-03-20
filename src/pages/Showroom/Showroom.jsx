import React from 'react';
import './Showroom.css';
import carData from '../../data/carData.json';
import CarDetails from '../CarDetails/CarDetails';
import { Link, Route, Routes } from 'react-router-dom';

const Showroom = () => {
  return (
    <section>
      <div className='Showroom-info'>
        <h1>Collectie</h1>
        <p>Zie hier de huidige collectie, u bent welkom om deze in het echt te zien, uitsluitend op afspraak.</p>
      </div>

      <div className='Gallery'>
        {carData.map((car, index) => (
          <Link key={index} to={`/Showroom/car/${index}`} className='CarLink'>
            <div className='Car'>
              <img src={`../images/cars/${car.images[0]}`} alt={car.title} loading='lazy' />
              <div className='CarInfo'>
                <h2>{car.title}</h2>
                <p>{car.secondTitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Plaats Routes hier buiten */}
      <Routes>
        <Route path="/Showroom/:id" element={<CarDetails />} />
      </Routes>
    </section>
  );
};

export default Showroom;
