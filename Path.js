import { CardActions } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { COontact } from '../COontact'
import CarHome from './About'
import Book from './Book'
import Bookde from './Bookingdetails'

import Carabout from './Carabout'
import Signup from './Carsign'
import Main from './Home'
import Login from './Login'


const Maslink = () => {
  return (
    <BrowserRouter>
    <Routes>
       
        
        
        <Route path="/gocontact"element={<COontact/>}></Route>
        <Route path="/goabout" element={<Carabout/>}></Route>
        <Route path="/gocars"element={<Main/>}></Route>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/glogin"element={<Login/>}></Route>
        <Route path="/home" element={<CarHome/>}></Route>
        <Route path="/gh"element={<CarHome/>}></Route>
        <Route path="/golog"element={<Signup/>}></Route>
        <Route path="/book"element={<Book/>}></Route>
        <Route path='/gosign'element={<Signup/>}></Route>
        <Route path='/gobook'element={<Bookde/>}></Route>

    </Routes>
    </BrowserRouter>
  
  )
}

export default Maslink;