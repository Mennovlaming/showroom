import React, { useState } from "react";
import carData from '../../data/carData.json';
import { useParams } from 'react-router-dom';
import './CarDetails.css';
import MailButton from "../../components/MailButton/MailButton";

const CarDetails = () => {
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Filter the cars by id and get the first match (assuming id is unique)
    const car = carData.filter((car) => car.id === parseInt(id))[0];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % car.images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + car.images.length) % car.images.length);
    };

    return (
        <div className="CarDetails">
            <div className="text">
                <h2>{car.title}</h2>
                <p>{car.secondTitle}</p>
            </div>
            <div className="slideshow">
                <button className=" navLeft" onClick={previousImage}><img src="/images/icons/arrow.png" alt="Left" /></button>
                <button className=" navRight" onClick={nextImage}><img src="/images/icons/arrow.png" alt="Right" /></button>
                <div className="image-container">
                    <img className="image" src={`/images/cars/${car.images[currentImageIndex]}`} alt={car.title} loading='lazy' />
                </div>
                <p className="image-indicator">{currentImageIndex + 1} / {car.images.length}</p>
            </div>
            
            <p className="text">{car.desctription}</p>
            <div className="SmallDetails">
                <p><strong>Bouwjaar: </strong>{car.Bouwjaar}</p>
                <p><strong>Kilometerstand: </strong>{car.Kilometerstand}</p>
                <p><strong>Vermogen: </strong>{car.Vermogen}</p>
                <p><strong>Transmissie: </strong>{car.Transmissie}</p>
                <p><strong>Brandstof: </strong>{car.Brandstof}</p>
            </div>
            <p className="text">Meer informatie?</p>
            <div className="mail">
                <MailButton />
            </div>
        </div>
    );
}

export default CarDetails;
