import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from  "./Pages/AboutPage"
import Layout from './Components/Layout/Layout'
import ContactPage from './Pages/ContactPage'
import SignUp from './Pages/SignUp'
import LoginPage from './Pages/LoginPage'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={
          <Layout>
        <HomePage/>
        </Layout>
        }/>
        <Route path='/about' element={
          <Layout>
        <AboutPage/>
        </Layout>
        }/>
        <Route path='/contact' element={ <Layout><ContactPage/></Layout> } />
        <Route path='/signUp' element={ <Layout><SignUp/></Layout> } />
        <Route path='/login' element={ <Layout><LoginPage/></Layout> } />
    </Routes>
  )
}

export default Router