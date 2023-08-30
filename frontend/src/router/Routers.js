import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home'
import Tours from './../pages/Tours'
import Login from './../pages/Login'
import Register from './../pages/Register'
import TourDetails from './../pages/TourDetails'
import SearchResultList from './../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import About from './../pages/About';


const Routers = () => {
  return (
    <Routes suppressNoMatchWarning={true}>
        <Route path='/' element={<Navigate to = '/home'/>}/>
        <Route path='/home' element = {<Home/>} />
        <Route path='/tours' element = {<Tours/>} />
        <Route path='/tours/:id' element = {<TourDetails/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/thank-you' element = {<ThankYou/>} />
        <Route path='/tours/search' element = {<SearchResultList/>} />
        <Route path='/about' element = {<About/>} />
    </Routes>
  )
}

export default Routers
