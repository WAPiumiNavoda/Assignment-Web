import React, { useState } from 'react'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import LandingPage from './screens/LandingPage/LandingPage'
import MyNotes from './screens/MyNotes/MyNotes'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LoginPage from './screens/LoginPage/LoginPage'
import RegisterPage from './screens/RegisterPage/RegisterPage'
import { CreateNotes } from './screens/CreateNote/CreateNotes'
import SingleNote from './screens/SingleNote/SingleNote'

function App() {
  const [search, setSearch] = useState("");
 console.log(search);
  return (
    <>
      <BrowserRouter>
        <Header setSearch={setSearch}/>
        <main>
          <Route path="/" component={LandingPage} exact />   
          <Route path="/login" component={LoginPage} />   
          <Route path="/register" component={RegisterPage } />   
          <Route path="/createnotes" component={CreateNotes } />   
          <Route path="/note/:id" component={SingleNote} />   
          <Route path="/mynotes" component={()=> <MyNotes search={setSearch}/> } />
        </main>
        <Footer />
       </BrowserRouter>
    </>
  )
}



export default App
