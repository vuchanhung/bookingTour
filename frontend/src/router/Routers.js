import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home'
import Tours from './../pages/Tours'
import Login from './../pages/Login'
import Register from './../pages/Register'
import TourDetails from './../pages/TourDetails'
import SearchResultList from './../pages/SearchResultList'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to = '/home'/>}/>
        <Route path='/home' element = {<Home></Home>} />
        <Route path='/tour' element = {<Tours></Tours>} />
        <Route path='/tour/:id' element = {<TourDetails></TourDetails>} />
        <Route path='/login' element = {<Login></Login>} />
        <Route path='/register' element = {<Register></Register>} />
        <Route path='/tour/search' element = {<SearchResultList></SearchResultList>} />
    </Routes>
  )
}

export default Routers
