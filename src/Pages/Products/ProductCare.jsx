import React from "react";
import Header from "../../Components/Header/Header";
import NavbarCategories from "../../Components/NavbarCategories/NavbarCategories";
import Footer from "../../Components/Footer/Footer";

import img from './Assets/Care_img.png'


const ProductsCare = () => {
    return (
        <>
            <Header/>
            <NavbarCategories 
                categoryName = "Cuidado Personal"
                img = {img}                
                filter1 = "Cremas"
                filter2 = "Exfoliantes"
                filter3 = "Jabones"  
                primaryColor = "#E99AC3"
                filterSection = "Cuidado Personal"                 
            /> 
            <Footer/>        
        </>
    )
}

export default ProductsCare; 