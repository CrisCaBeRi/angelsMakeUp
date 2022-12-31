//Import the components that will be printed on the page 
import React from "react";
import Header from "../../Components/Header/Header";
import NavbarCategories from "../../Components/NavbarCategories/NavbarCategories";
import Footer from "../../Components/Footer/Footer";
import img from './Assets/MakeUp_img.png'

const ProductsMakeup = _ => {
    return (
        <>
            <Header/>{/* Get the element usen the tag  */}
            <NavbarCategories 
                categoryName = "Maquillaje"
                img = {img}                
                filter1 = "Bases"
                filter2 = "Labiales"
                filter3 = "Pestañina"  
                primaryColor = "#A570AE"
                filterSection = "Maquillaje"                 
            /> {/* Send the props that are used to filter the information of the json  */}
            <Footer/>      
        </>
    )
}
export default ProductsMakeup; 