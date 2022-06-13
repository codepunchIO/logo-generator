import { useDispatch } from 'react-redux'
import { setIcon } from '../../store/slices/logoSlice/logoSlice'
import axios from 'axios'
import { store } from '../../store/store'
import { useState, FormEvent, useEffect, ChangeEventHandler } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const Icons = () => {
  const state = store.getState()
  const [searchInputValue, setSearchInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: any) => {
    setSearchInputValue(e.target.value)
  }
  const [icons, setIconsState] = useState<string[]>([])
  console.log('searchInputValue', searchInputValue)

  const FetchIcons = async (query: string) => {
    setIsError(false)
    setIsLoading(true)

    try {
      const res = await axios.get(`http://127.0.0.1:8443/icon/${query}`)
      console.log(res, 'response')
      setIconsState(res.data)
      setIsLoading(false)
    } catch {
      setIsError(true)
      setErrorMessage(searchInputValue)
      setIsLoading(false)
    }
  }

  const QueryIcons = (e: FormEvent<HTMLFormElement>) => {
    debugger
    e.preventDefault()
    if (searchInputValue !== '') {
      FetchIcons(searchInputValue)
    }
  }

  const dispatch = useDispatch()
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const id = e.currentTarget.id
    dispatch(setIcon(id))
  }
  return (
    <div className="flex flex-col h-full w-full p-1">
      <h1 className="text-4xl text-center font-extrabold p-4 pt-24 text-gray-900 mb-7">
        Search for perfect logo
      </h1>

      <form onSubmit={(e) => QueryIcons(e)}>
        <div className="flex flex-row justify-center">
          <div className="mb-3 xl:w-96 flex flex-col">
            <div className="input-group flex-col justify-center items-center text-center w-full mb-4">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none mb-3"
                placeholder="Search"
                onChange={handleChange}
                aria-label="Search"
                aria-describedby="button-addon3"
              />
              <button
                className="btn w-full inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="submit"
                id="button-addon3"
                disabled={searchInputValue === ''}>
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center ">
        {isLoading ? <CircularProgress color="success" className="" /> : null}
        {isError ? (
          <div
            className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700 w-1/4	"
            role="alert">
            <svg
              className="w-5 h-5 inline mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
            </svg>
            <div>
              <span>We didn't find any icons for "{errorMessage}"</span>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap flex-row justify-evenly w-3/4 mx-auto p-8 h-full ">
        {icons.map((icon, index) => (
          <div
            key={index}
            className=" flex flex-row flex-nowrap hover:scale-100 my-2 duration-300 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-40 w-72 justify-center ">
            <img
              className="flex flex-col w-5/6  text-center min-w-full border-2 justify-center h-auto rounded-lg text-xl px-6 py-2"
              onClick={(e) => handleClick(e)}
              id={String(icons.indexOf(icon) + 1)}
              src={icon}
              alt="layout"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Icons
