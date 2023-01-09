import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Posts from './../Pages/Posts';
import About from './../Pages/About';
import Error from './../Pages/Error';
import PostIdPage from './../Pages/PostIdPage';
import {privateRoutes, publicRoutes } from './../router/routes';
import { AuthContext } from './../Context/context';
import Loader from './UI/loader/Loader';

function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext) 

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
    ? 
    <Routes>
    {privateRoutes.map(r => 
      <Route path={r.path} element={<r.element />} key={r.path}/>)}
   <Route path='/*' element={<Navigate to='/posts' replace />} />
  </Routes>
    : 
    <Routes>
    {publicRoutes.map(r => 
      <Route path={r.path} element={<r.element />} key={r.path}/>)}
   <Route path='/*' element={<Navigate to='/login' replace />} />
  </Routes>
    
  )
}

export default AppRouter