import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GiphyApp from './components/GiphyApp/GiphyApp'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GiphyApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
