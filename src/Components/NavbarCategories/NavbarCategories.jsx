import React, {useState} from "react";
import ProductsData from "../../Data/ProductsData";
import './NavbarCategories.css';

const NavbarCategories = (props) => {
    
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
                        {/* Filter selection enviar las props */}
                        <button onClick={()=> filterSection( props.filter1 )} style={{backgroundColor: props.primaryColor}}> { props.filter1 } </button>
                        <button onClick={()=> filterSection( props.filter2 )} style={{backgroundColor: props.primaryColor}}> { props.filter2 } </button>
                        <button onClick={()=> filterSection( props.filter3 )} style={{backgroundColor: props.primaryColor}}> { props.filter3 } </button>
                    </div>              
                </div>
                
                <div className="cards">
                    {data.map((product) => {
                        const {
                            prItem,                         
                            prName, 
                            prImage, 
                            prDescription, 
                            prPrice } = product;

                            if (product.prCategory === props.filterSection) {
                                return (                
                                    <>
                                        <div className="card-product" key={prItem}>         
                                            <img src={ prImage } alt="" />                         
                                            <h1 style= {{color: props.primaryColor}} >{ prName }</h1>                               
                                            <p>{prDescription}</p>                              
                                            <div className="price-car">
                                                <h3 style= {{backgroundColor: props.primaryColor}}> ${prPrice}</h3>    
                                                <i className="ri-shopping-cart-2-fill"> </i> 
                                            </div>
                                        </div>                  
                                    </>               
                                )
                            }                             
                        }
                    )}
                </div>
            </div>    
        </>   
    )
}

export default NavbarCategories; 