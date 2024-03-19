import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  const mailLink = () => {
    const email = 'mennovlaming@gmail.com';
    const mailtoLink = `mailto:${email}`;
   
    window.open(mailtoLink, '_blank');
  };
  return (
    <div className='footer'>
      <div className='info'>
        <div className='telefoon'>
          <p><FontAwesomeIcon icon={faPhone} /> 0612345679</p>
          <p><FontAwesomeIcon icon={faHome} /> Middenvliet 45</p>
        </div>
        <a onClick={mailLink}><FontAwesomeIcon icon={faEnvelope} /> email@email.com</a>
        </div>
    </div>
  )
}

export default Footer