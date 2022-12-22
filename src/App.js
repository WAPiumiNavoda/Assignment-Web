import React from 'react'
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import LandingPage from './screens/LandingPage/LandingPage'
import { MyNotes } from './screens/MyNotes/MyNotes'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LoginPage from './screens/LoginPage/LoginPage'
import RegisterPage from './screens/RegisterPage/RegisterPage'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />   
          <Route path="/login" element={<LoginPage />} />   
          <Route path="/register" element={<RegisterPage />} />   
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
        <Footer />
       </Router>
    </>
  )
}



export default App
