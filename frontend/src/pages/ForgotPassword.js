import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {forgotPasswordUser} from '../redux/authSlice'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(forgotPasswordUser({email}))
  }

  return (
    <div className='max-w-md mx-auto mt-8'>
      <h2 className='text-2xl mb-4'>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block mb-2'>Email</label>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full p-2 bg-blue-600 text-white rounded'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword
