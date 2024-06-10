// frontend/src/components/Footer.js
import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Footer = () => {
  const {isAuthenticated} = useSelector(state => state.auth)

  return (
    <footer className='bg-gray-800 p-5 mt-5 text-center'>
      <div className='container mx-auto'>
        {!isAuthenticated && (
          <>
            <Link to='/signin' className='text-white ml-4'>
              Sign In
            </Link>
            <Link to='/signup' className='text-white ml-4'>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </footer>
  )
}

export default Footer
