import React from 'react'
import {useFetchGIFs} from '../../hooks/useFetchGIFs'
import {useURLQueryParams} from '../../hooks/useURLQueryParams'
import GifContainer from '../GifContainer/GifContainer'
import GifSearch from '../Search/GifSearch'
import './GiphyApp.css'

const GiphyApp = () => {
  const {q, limit, offset} = useURLQueryParams()
  const {data, isLoading, isError} = useFetchGIFs(q, limit, offset)
  return (
    <div className="wrapper">
      <GifSearch />
      <GifContainer data={data} isError={isError} isLoading={isLoading} />
    </div>
  )
}

export default GiphyApp
