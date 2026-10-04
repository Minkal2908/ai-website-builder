import axios from "axios"
import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import useGetCurrentUser from './hooks/useGetCurrentUser'
import { useSelector } from 'react-redux'
import Dashboard from './pages/Dashboard'
import Generate from './pages/Generate'
import WebsiteEditor from './pages/Editor'
import LiveSite from './pages/LiveSite'
import Pricing from './pages/Pricing'

export const serverUrl="https://ai-website-builder-backend-r8ay.onrender.com"
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
function App() {
  useGetCurrentUser()
  const {userData}=useSelector(state=>state.user)
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={userData?<Dashboard/>:<Home/>}/>
     <Route path='/generate' element={userData?<Generate/>:<Home/>}/>
     <Route path='/editor/:id' element={userData?<WebsiteEditor/>:<Home/>}/>
      <Route path='/site/:id' element={<LiveSite/>}/>
       <Route path='/pricing' element={<Pricing/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
