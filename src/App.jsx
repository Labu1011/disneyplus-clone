import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Detail } from './components/Detail'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  )
}
