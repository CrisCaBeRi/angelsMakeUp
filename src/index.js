import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //Uso de react router dom 
//Get all the pages to link using the router of react router 
import Home from './Pages/Home/Home';
import ProductsNails from './Pages/Products/ProductsNails';
import ProductsCare from './Pages/Products/ProductCare';
import ProductsMakeup from './Pages/Products/ProductMakeup';
import BuyCart from './Pages/BuyCart/BuyCart';
import ProductsHair from './Pages/Products/ProductHair';
//Import methods that are used of redux and react-redux 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './Components/ShoppingCar/Reducer.jsx';

const store =createStore(Reducer);//Const var created to manage the methos created by dispatch that are a methos of redux 

//Const created to set the routes and elements that are used by router provider method of react router dom to charge the routes and get acces from everywhere in the document. 
const router = createBrowserRouter([
  {
    path: "/home",//Path is used to create a extension of the url and is used to acces the element when use the method Link to 
    element : <Home/> //Set the page or jsx file to the link 🔝
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
  /* Provider is a method who set a lot of global elements in the app, and the defined store set the values of the Reducer file the get access in every part of the app */ 
  <Provider store={store}> 
    <React.StrictMode>    
        <RouterProvider router={router} /> {/* se llama el otro método react router que llama la constante con la variable que contiene el array objeto ⬆️. */}   
    </React.StrictMode>  
  </Provider>   
);

