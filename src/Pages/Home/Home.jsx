//Import the components that will be printed on the page 
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Home = _ => {  
    return (
        <>  
            <Header/>  {/* Get the element usen the tag  */}
            <CarouselHome/>  
            <Categories/>
            <Footer/>   
        </>
    )
}
export default Home; 