import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './containers/Header'
import ProductListing from './containers/ProductListing'
import ProductDetails from './containers/ProductDetails'

function Layout () {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
        <Route  path='/' element={<ProductListing />}/>
        <Route path='/products/:id' element={<ProductDetails />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
