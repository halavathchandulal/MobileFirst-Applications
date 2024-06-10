import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'
import starWarsReducer from './starWarsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    starWars: starWarsReducer,
  },
})

export default store
