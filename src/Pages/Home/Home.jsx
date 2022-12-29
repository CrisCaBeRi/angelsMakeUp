import React from "react";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Home = _ => {  
    return (
        <>  
            <Header/>  
            <CarouselHome/>  
            <Categories/>
            <Footer/>   
        </>
    )
}

export default Home; 