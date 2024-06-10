import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signinUser} from '../redux/authSlice'
import {Navigate, Link} from 'react-router-dom'
import './Signin.css'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isAuthenticated, error} = useSelector(state => state.auth)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(signinUser({email, password}))
  }

  if (isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
    <div className='container max-w-md mx-auto mt-8'>
      <form onSubmit={handleSubmit}>
        <h2 className='text-2xl mb-4 text-center'>Sign In</h2>
        {error && <p className='text-red-500 text-center'>{error.message}</p>}
        <div className='mb-4'>
          <label className='block mb-2'>Email</label>
          <br />
          <input
            type='email'
            placeholder='Enter Your Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Password</label>
          <br />
          <input
            type='password'
            placeholder='Enter Your Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <p className='mt-4'>
          <Link to='/forgot-password' className='text-blue-600'>
            Forgot Password?
          </Link>
        </p>
        <button
          type='submit'
          className='w-full p-2 bg-blue-600 text-white rounded mb-4'
        >
          Sign In
        </button>
        <p className='text-center'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-blue-600'>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Signin
