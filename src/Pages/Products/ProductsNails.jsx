import React from "react";
import Header from "../../Components/Header/Header";
import NavbarCategories from "../../Components/NavbarCategories/NavbarCategories";
import Footer from "../../Components/Footer/Footer";

import img from './Assets/Nails_img.png'

const ProductsNails= _ => {
    return (
        <>
        <Header/>
        <NavbarCategories 
                categoryName = "Uñas"
                img = {img}                
                filter1 = "Acrílicos"
                filter2 = "Esmaltes"
                filter3 = "Removedores"  
                primaryColor = "#804695"
                filterSection = "Uñas"                  
            /> 
            <Footer/>  
        </>
    )
}

export default ProductsNails; 