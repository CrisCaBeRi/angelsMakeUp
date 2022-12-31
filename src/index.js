import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //Uso de react router dom 
//Se traen las pages 
import Home from './Pages/Home/Home';
import ProductsNails from './Pages/Products/ProductsNails';
import ProductsCare from './Pages/Products/ProductCare';
import ProductsMakeup from './Pages/Products/ProductMakeup';
import BuyCart from './Pages/BuyCart/BuyCart';
import ProductsHair from './Pages/Products/ProductHair';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './Components/ShoppingCar/Reducer.jsx';

const store =createStore(Reducer);




//Se crea una constante tipo array - objeto que use el método createroutebrowser. Adentro, se utilizan los elemento del objeto path y element para vincular las páginas.
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
    element: <ProductsHair/>
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

  { //Ruta por defecto
    path:"/",
    element : <App/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>    
        <RouterProvider router={router} /> {/* se llama el otro método react router que llama la constante con la variable que contiene el array objeto ⬆️. */}   
    </React.StrictMode>  
  </Provider>  

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

