//Import the components that will be printed on the page 
import Header from "../../Components/Header/Header";
import Cart from "../../Components/ShoppingCar/ShoppingCar";
import Footer from "../../Components/Footer/Footer";

const BuyCart = _ => {
    return (
        <>
            <Header/> {/* Get the element usen the tag  */}
            <Cart/> 
            <Footer/>                 
        </>
    )
}
export default BuyCart; 