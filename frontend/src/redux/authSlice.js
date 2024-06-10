// frontend/src/redux/authSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// Dummy data for signin
const signinDummyData = {
  email: 'test@example.com',
  password: 'password123',
}

// Dummy data for signup
const signupDummyData = {
  username: 'example_user',
  email: 'example@example.com',
  password: 'password123',
}

// Dummy data for forgot password
const forgotPasswordDummyData = {
  email: 'forgot@example.com',
}

export const signinUser = createAsyncThunk('auth/signinUser', async () => {
 
  return signinDummyData
})

export const signupUser = createAsyncThunk('auth/signupUser', async () => {
  
  return signupDummyData
})

export const forgotPasswordUser = createAsyncThunk(
  'auth/forgotPasswordUser',
  async () => {
   
    return forgotPasswordDummyData
  },
)

export const signoutUser = createAsyncThunk('auth/signoutUser', async () => {
  // Your signout API call here
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signinUser.fulfilled, state => {
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.isAuthenticated = false
        state.error = action.error.message
      })
      .addCase(signupUser.fulfilled, state => {
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isAuthenticated = false
        state.error = action.error.message
      })
      .addCase(forgotPasswordUser.fulfilled, state => {
        state.error = null
      })
      .addCase(forgotPasswordUser.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(signoutUser.fulfilled, state => {
        state.isAuthenticated = false
        state.error = null
      })
      .addCase(signoutUser.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export default authSlice.reducer
