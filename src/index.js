import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home/Home';
import ProductsNails from './Pages/Products/ProductsNails';
import ProductsCare from './Pages/Products/ProductCare';
import ProductsMakeup from './Pages/Products/ProductMakeup';
import BuyCart from './Pages/BuyCart/BuyCart';


const router = createBrowserRouter([
  {
    path: "/home",
    element : <Home/> 
  },

  {
    path: "/products_nails",
    element : <ProductsNails/> 
  },

  {
    path: "/products_hair",
    element: <ProductsNails/>
  },

  {
    path: "/products_care",
    element: <ProductsCare/>
  },

  {
    path: "/products_makeup",
    element: <ProductsMakeup/>
  },

  {
    path: "/buycart",
    element: <BuyCart/>
  },  

  {
    path:"/",
    element : <App/>
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

