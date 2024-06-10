import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchAllCharacters, setPage} from '../redux/starWarsSlice'
import {Link} from 'react-router-dom'

const CharacterList = () => {
  const dispatch = useDispatch()
  const {characters, loading, error, page} = useSelector(
    state => state.starWars,
  )

  useEffect(() => {
    dispatch(fetchAllCharacters(page))
  }, [dispatch, page])

  const handlePreviousPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1))
    }
  }

  const handleNextPage = () => {
    dispatch(setPage(page + 1))
  }

  return (
    <div className='max-w-4xl mx-auto mt-8'>
      <h2 className='text-2xl mb-4'>Star Wars Characters</h2>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error.message}</p>}
      <table className='w-full border-collapse border border-gray-300'>
        <thead>
          <tr>
            <th className='border p-2'>Name</th>
            <th className='border p-2'>Height</th>
            <th className='border p-2'>Mass</th>
            <th className='border p-2'>Gender</th>
            <th className='border p-2'>Details</th>
          </tr>
        </thead>
        <tbody>
          {characters.map(character => (
            <tr key={character.name}>
              <td className='border p-2'>{character.name}</td>
              <td className='border p-2'>{character.height}</td>
              <td className='border p-2'>{character.mass}</td>
              <td className='border p-2'>{character.gender}</td>
              <td className='border p-2'>
                <Link
                  to={`/character/${character.url.split('/')[5]}`}
                  className='text-blue-600'
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-between mt-4'>
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className='p-2 bg-gray-300 rounded'
        >
          Previous
        </button>
        <button onClick={handleNextPage} className='p-2 bg-gray-300 rounded'>
          Next
        </button>
      </div>
    </div>
  )
}

export default CharacterList
