import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import ProductsList from "./pages/ProductsList/ProductsList";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
