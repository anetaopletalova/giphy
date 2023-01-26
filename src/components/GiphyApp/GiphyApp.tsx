import React from 'react'
import {useQuery} from 'react-query'
import {getGIFS} from '../../api'
import {useURLQueryParams} from '../../hooks/useURLQueryParams'
import GifContainer from '../GifContainer/GifContainer'
import GifSearch from '../Search/GifSearch'
import './GiphyApp.css'

const GiphyApp = () => {
  const {q, limit, offset} = useURLQueryParams()
  const {data, isLoading, isError} = useQuery(
    ['GIFs', offset, q, limit],
    () => getGIFS(q, limit, offset),
    {enabled: !!q, keepPreviousData: true},
  )
  return (
    <div className="wrapper">
      <GifSearch />
      <GifContainer data={data} isError={isError} isLoading={isLoading} />
    </div>
  )
}

export default GiphyApp
