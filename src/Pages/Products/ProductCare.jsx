//Import the components that will be printed on the page 
import React from "react";
import Header from "../../Components/Header/Header";
import NavbarCategories from "../../Components/NavbarCategories/NavbarCategories";
import Footer from "../../Components/Footer/Footer";
import img from './Assets/Care_img.png'

const ProductsCare = () => {
    return (
        <>
            <Header/>{/* Get the element usen the tag  */}
            <NavbarCategories 
                categoryName = "Cuidado Personal"
                img = {img}                
                filter1 = "Cremas"
                filter2 = "Exfoliantes"
                filter3 = "Jabones"  
                primaryColor = "#E99AC3"
                filterSection = "Cuidado Personal"                 
            /> {/* Send the props that are used to filter the information of the json  */}
            <Footer/>        
        </>
    )
}
export default ProductsCare; 