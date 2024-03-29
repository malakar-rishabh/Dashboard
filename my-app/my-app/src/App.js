import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App