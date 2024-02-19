import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {

  return (
    <div className='footer'>
        <div className='telefoon'>
            <p>0612345679</p>
            <p>0223123456</p>
        </div>
        <p className='email'>email@email.com</p>
    </div>
  )
}

export default Footer