import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  const mailLink = () => {
    const email = 'farmflowers@live.nl';
    const mailtoLink = `mailto:${email}`;
   
    window.open(mailtoLink, '_blank');
  };
  return (
    <div className='footer'>
      <div className='info'>
        <div className='telefoon'>
          <p><FontAwesomeIcon icon={faPhone} /> 0620422388</p>
          <p><FontAwesomeIcon icon={faHome} /> Middenvliet 11</p>
        </div>
        <a onClick={mailLink}><FontAwesomeIcon icon={faEnvelope} /> farmflowers@live.nl</a>
        </div>
    </div>
  )
}

export default Footer