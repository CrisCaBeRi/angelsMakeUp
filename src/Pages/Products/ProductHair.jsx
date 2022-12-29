import React from "react";
import Header from "../../Components/Header/Header";
import NavbarCategories from "../../Components/NavbarCategories/NavbarCategories";

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
                primaryColor = "#E99AC3"                  
            />         
        </>
    )
}

export default ProductsHair; 