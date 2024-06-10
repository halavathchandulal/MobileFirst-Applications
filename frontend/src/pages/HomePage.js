// frontend/src/pages/HomePage.js
import React from 'react'
import {Link} from 'react-router-dom'
import './HomePage.css' // Assuming you have some CSS for styling the homepage

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <h1 className='homepage-title'>Welcome to the Star Wars App</h1>
      <p className='homepage-description'>
        Discover detailed information about your favorite Star Wars characters.
      </p>
      <div className='homepage-links'>
        <Link to='/characters' className='homepage-link'>
          View Characters
        </Link>
      </div>
    </div>
  )
}

export default HomePage
