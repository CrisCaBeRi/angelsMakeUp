//Import the components that will be printed on the page 
import React from "react";
import Header from "../../Components/Header/Header";
import NavbarCategories from "../../Components/NavbarCategories/NavbarCategories";
import Footer from "../../Components/Footer/Footer";
import img from './Assets/Nails_img.png'

const ProductsNails= _ => {
    return (
        <>
        <Header/>{/* Get the element usen the tag  */}
        <NavbarCategories 
                categoryName = "Uñas"
                img = {img}                
                filter1 = "Acrílicos"
                filter2 = "Esmaltes"
                filter3 = "Removedores"  
                primaryColor = "#804695"
                filterSection = "Uñas"                  
            /> {/* Send the props that are used to filter the information of the json  */}
            <Footer/>  
        </>
    )
}
export default ProductsNails; 