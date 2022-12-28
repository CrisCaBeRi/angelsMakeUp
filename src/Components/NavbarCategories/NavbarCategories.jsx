import React, {useState} from "react";
import ProductsData from "../../Data/ProductsData";


const NavbarCategories = () => {
    const [data, setData] = useState(ProductsData);

    //filtrado por secciones 
    const filterSection = (sectionItem) => {
        const result = ProductsData.filter((curDate)=> {
            return curDate.prSection === sectionItem;
        });
        setData(result)
    }

    return (   
        <>

        

            <img src="" alt="" />
            <button  onClick={()=> setData()}> IMAGEN AQUI </button>

            <button onClick={()=> filterSection("Shampoo")}> Shampoo</button>
            <button onClick={()=> filterSection("Tintes")}> Tintes</button>
            <button onClick={()=> filterSection("Tratamientos")}> Tratamientos</button>

            <div className="cards">
                {data.map((product) => {
                    const {prItem, prName, prImage, prDescription, prPrice} = product;
                    return (                
                        <>
                            <div className="card" key={prItem}>
                                <h1>{ prName }</h1>
                                <img src={ prImage } alt="" />
                                <p>{prDescription}</p>
                                <h3>{prPrice}</h3>                    
                            </div>                
                        </>                 
                    )
                })}
            </div>     
        </>   
    )
}

export default NavbarCategories; 