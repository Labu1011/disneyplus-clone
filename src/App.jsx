import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}
