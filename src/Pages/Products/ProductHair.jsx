import React from "react";
import Header from "../../Components/Header/Header";
import NavbarCategories from "../../Components/NavbarCategories/NavbarCategories";
import Footer from "../../Components/Footer/Footer";

import img from './Assets/Hair_img.png'


const ProductsHair = _ => {
    return (
        <>
            <Header/>
            <NavbarCategories 
                categoryName = "Cabello"
                img = {img}                
                filter1 = "Shampoo"
                filter2 = "Tintes"
                filter3 = "Tratamientos"  
                primaryColor = "#ED6CA6"
                filterSection = "Cabello"                  
            /> 
            <Footer/>        
        </>
    )
}

export default ProductsHair; 