//Import the components that will be printed on the page 
import React from "react";
import Header from "../../Components/Header/Header";
import NavbarCategories from "../../Components/NavbarCategories/NavbarCategories";
import Footer from "../../Components/Footer/Footer";
import img from './Assets/Hair_img.png'

const ProductsHair = _ => {
    return (
        <>
            <Header/>{/* Get the element usen the tag  */}
            <NavbarCategories 
                categoryName = "Cabello"
                img = {img}                
                filter1 = "Shampoo"
                filter2 = "Tintes"
                filter3 = "Tratamientos"  
                primaryColor = "#ED6CA6"
                filterSection = "Cabello"                  
            /> {/* Send the props that are used to filter the information of the json  */}
            <Footer/>        
        </>
    )
}
export default ProductsHair; 