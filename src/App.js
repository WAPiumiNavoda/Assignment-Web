import React from 'react'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import LandingPage from './screens/LandingPage/LandingPage'
import MyNotes from './screens/MyNotes/MyNotes'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LoginPage from './screens/LoginPage/LoginPage'
import RegisterPage from './screens/RegisterPage/RegisterPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Route path="/" component={LandingPage} exact />   
          <Route path="/login" component={LoginPage} />   
          <Route path="/register" component={RegisterPage } />   
          <Route path="/mynotes" component={MyNotes } />
        </main>
        <Footer />
       </BrowserRouter>
    </>
  )
}



export default App
