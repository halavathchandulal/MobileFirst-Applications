// frontend/src/components/Navbar.js
import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signoutUser} from '../redux/authSlice'
import './index.css'

const Navbar = () => {
  const dispatch = useDispatch()
  const {isAuthenticated} = useSelector(state => state.auth)

  const handleSignout = () => {
    dispatch(signoutUser())
  }

  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex-1 text-center'>
          <Link to='/' className='link1 text-white text-lg'>
            Star Wars App
          </Link>
        </div>
        <div className='flex'>
          {isAuthenticated && (
            <button onClick={handleSignout} className='text-white ml-4'>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
