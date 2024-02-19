import React from 'react';
import './MailButton.css'

const MailButton = () => {
  const handleButtonClick = () => {
    // Specifieer het e-mailadres en eventuele andere parameters
    const email = 'mennovlaming@gmail.com';


    // Creëer de mailto-link
    const mailtoLink = `mailto:${email}`;

    // Open een nieuw venster met de mailto-link
    window.open(mailtoLink, '_blank');
  };

  return (
    <button onClick={handleButtonClick} className="mailButton">
      Neem contact op
    </button>
  );
};

export default MailButton;
