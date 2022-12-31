import React, {useState} from "react";
import ProductsData from "../../Data/ProductsData";
import './NavbarCategories.css';

//REDUCER

import { useSelector, useDispatch } from "react-redux";

const NavbarCategories = (props) => { 

    //Reducer
    const cart = useSelector((state)=>state);
    console.log(cart)
    const dispatch = useDispatch(); 


    const [data, setData] = useState(ProductsData);
    const filterSection = (sectionItem) => {
        const result = ProductsData.filter((curDate)=> {       
            return curDate.prSection === sectionItem;
        });
        setData(result)
    }

    return (   
        <>
            <div className="container-general">
                <div className="container-navbar">
                    <h2>Categorías</h2>
                    <div className="img-name">
                        <img src={props.img} alt="Logo Cabello" /> 
                        <h3 style={{backgroundColor: props.primaryColor}}>{props.categoryName}</h3>
                    </div>
                    
                    <div className="buttons-nav">
                        
                        <button onClick={()=> filterSection( props.filter1 )} style={{backgroundColor: props.primaryColor}}> { props.filter1 } </button>
                        <button onClick={()=> filterSection( props.filter2 )} style={{backgroundColor: props.primaryColor}}> { props.filter2 } </button>
                        <button onClick={()=> filterSection( props.filter3 )} style={{backgroundColor: props.primaryColor}}> { props.filter3 } </button>
                    </div>              
                </div>
                
                <div className="cards">
                    {data.map((product) => {
                        product.prQuantity = 1;                  
                            if (product.prCategory === props.filterSection) {
                                return (                
                                    <>
                                        <div className="card-product" key={product.prItem}>  

                                            <img src={ product.prImage } alt="" />                         
                                            <h1 style= {{color: props.primaryColor}} >{ product.prName }</h1>                               
                                            <p>{product.prDescription}</p>                              
                                            <div className="price-car">
                                                <h3 style= {{backgroundColor: props.primaryColor}}> ${product.prPrice}</h3> 

                                                <button onClick={ () => dispatch ({type:"ADD", payload: product}) }>                
                                                    <i className="ri-shopping-cart-2-fill"> </i>
                                                </button>  
                                            </div>
                                        </div>                  
                                    </>               
                                )
                            } return null                            
                        } 
                                               
                    )} 
                </div>
            </div>    
        </>   
    )
}

export default NavbarCategories; 