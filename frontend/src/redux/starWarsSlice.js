// frontend/src/redux/starWarsSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAllCharacters = createAsyncThunk(
  'starWars/fetchAllCharacters',
  async () => {
    const response = await axios.get('https://swapi.dev/api/people/')
    return response.data.results
  },
)

export const fetchCharacterDetail = createAsyncThunk(
  'starWars/fetchCharacterDetail',
  async id => {
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`)
    return response.data
  },
)

const starWarsSlice = createSlice({
  name: 'starWars',
  initialState: {
    characters: [],
    character: null,
    loading: false,
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCharacters.pending, state => {
        state.loading = true
      })
      .addCase(fetchAllCharacters.fulfilled, (state, action) => {
        state.loading = false
        state.characters = action.payload
      })
      .addCase(fetchAllCharacters.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchCharacterDetail.pending, state => {
        state.loading = true
      })
      .addCase(fetchCharacterDetail.fulfilled, (state, action) => {
        state.loading = false
        state.character = action.payload
      })
      .addCase(fetchCharacterDetail.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const {setPage} = starWarsSlice.actions

export default starWarsSlice.reducer
