//Import the exclusive methods of react and react redux to set a default values thar are used by th buy cart 
import React, {useState} from "react";
import ProductsData from "../../Data/ProductsData"; //import of the db or json file who contents the items information
import './NavbarCategories.css';
//REDUCER
import { useSelector, useDispatch } from "react-redux";

const NavbarCategories = (props) => { 
    //Reducer useSelector to modify the state of the buycart
    const cart = useSelector((state)=>state);
    console.log(cart) //is important to verify the array of the component when the user add items on the car 
    const dispatch = useDispatch(); //Dispatch is used to create an object who is used to create the exlusive method of the car, ADD items Delete Items decrease and increase the quantity of the products.

    const [data, setData] = useState(ProductsData);//hook used to save the database or the json file 
    const filterSection = (sectionItem) => {//Function created to filter the data with the props sended on pages
        const result = ProductsData.filter((curDate)=> {       
            return curDate.prSection === sectionItem; //Return only the values that are similar with the props thar are sended from props
        });
        setData(result)//Return a new DB or array with the data filtered 
    }

    return (   
        <>
            <div className="container-general">
                <div className="container-navbar">
                    <h2>Categorías</h2>
                    <div className="img-name">
                        <img src={props.img} alt="Logo Cabello" /> {/* Here the props are used like styles to reduce the coding */} 
                        <h3 style={{backgroundColor: props.primaryColor}}>{props.categoryName}</h3>
                    </div>
                    
                    <div className="buttons-nav">
                        {/* On clic action is used to call the up function, this call are maded using the props sended  */}
                        <button onClick={()=> filterSection( props.filter1 )} style={{backgroundColor: props.primaryColor}}> { props.filter1 } </button>
                        <button onClick={()=> filterSection( props.filter2 )} style={{backgroundColor: props.primaryColor}}> { props.filter2 } </button>
                        <button onClick={()=> filterSection( props.filter3 )} style={{backgroundColor: props.primaryColor}}> { props.filter3 } </button>
                    </div>              
                </div>
                {/* depending on the filter and the value returned using  the hook setdata, this part is used to print all the cards of the products who are filtered */}
                <div className="cards"> 
                    {data.map((product) => { /* map array method to run inside the array and print every item */
                        product.prQuantity = 1;                  
                            if (product.prCategory === props.filterSection) {//A new filter to show only the Section on the start items without the second filter. This first filter show only all the product of the category Uñas - cabello etc. The second filter, is used to filter by category, linke uñas-esmaltes or cabello-shampoo
                                return (                
                                    <>
                                        <div className="card-product" key={product.prItem}> 
                                            <img src={ product.prImage } alt="" />                         
                                            <h1 style= {{color: props.primaryColor}} >{ product.prName }</h1>                               
                                            <p>{product.prDescription}</p>                              
                                            <div className="price-car">
                                                <h3 style= {{backgroundColor: props.primaryColor}}> ${product.prPrice}</h3> 
                                                {/* Use of dispatch to make the functionality of the button with a function on Reducer file */}
                                                <button onClick={ () => dispatch ({type:"ADD", payload: product}) }>                
                                                    <i className="ri-shopping-cart-2-fill"> </i>
                                                </button>  
                                            </div>
                                        </div>                  
                                    </>               
                                )
                            } return null;                            
                        }                            
                    )} 
                </div>
            </div>    
        </>   
    )
}

export default NavbarCategories; 