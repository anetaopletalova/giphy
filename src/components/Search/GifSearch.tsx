import {TextField} from '@mui/material'
import React, {ChangeEvent, useState} from 'react'
import {useURLQueryParams} from '../../hooks/useURLQueryParams'
import './GifSearch.css'

let delayTimeout: ReturnType<typeof setTimeout> | null

const GifSearch: React.FC = () => {
  const {setParams, q, limit} = useURLQueryParams()
  const [input, setInput] = useState(q || '')

  const handleChange = (input: ChangeEvent<HTMLInputElement>) => {
    const value = input.target.value
    setInput(value)

    if (delayTimeout) clearTimeout(delayTimeout)
    delayTimeout = setTimeout(() => {
      setParams('q', value)
      setParams('offset', '0')
    }, 3000)
  }

  return (
    <div className="container">
      <span className="title">Let's search for some GIFs!</span>
      <TextField
        label="GIF name"
        value={input}
        onChange={handleChange}
        inputProps={{maxLength: 50}}
        style={{width: 350}}
        data-testid="search"
      />
    </div>
  )
}

export default GifSearch
