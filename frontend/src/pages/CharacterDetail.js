import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCharacterDetail} from '../redux/starWarsSlice'
import {useParams} from 'react-router-dom'

const CharacterDetail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {character, loading, error} = useSelector(state => state.starWars)

  useEffect(() => {
    dispatch(fetchCharacterDetail(id))
  }, [dispatch, id])

  return (
    <div className='max-w-xl mx-auto mt-8'>
      <h2 className='text-2xl mb-4'>Character Detail</h2>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error.message}</p>}
      {character && (
        <div>
          <p>
            <strong>Name:</strong> {character.name}
          </p>
          <p>
            <strong>Height:</strong> {character.height}
          </p>
          <p>
            <strong>Mass:</strong> {character.mass}
          </p>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          <p>
            <strong>Birth Year:</strong> {character.birth_year}
          </p>
          <p>
            <strong>Hair Color:</strong> {character.hair_color}
          </p>
          <p>
            <strong>Skin Color:</strong> {character.skin_color}
          </p>
          <p>
            <strong>Eye Color:</strong> {character.eye_color}
          </p>
        </div>
      )}
    </div>
  )
}

export default CharacterDetail
