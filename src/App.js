import './App.css';
import CarouselHome from './Components/CarouselHome/CarouselHome';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import Cabecera from './Components/Header/Header';

/* import Home from './Pages/Home'; */


/* import ProductCategory from './Components/ProductCategory/ProductCategory'; */

function App() {
  return (
    
    <div className="App">

      {/* <Home/> */}
      
     <Cabecera/>
     <CarouselHome/>
     <Categories/>
     <Footer/>  

      {/* <ProductCategory/> */}

    </div>
  );
}

export default App;
