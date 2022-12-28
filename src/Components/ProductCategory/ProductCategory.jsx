import ProductsData from "../../Data/ProductsData";
import './ProductCategory.css'

 const ProductCategory = () => {
    
    return (

        //Estructura para filtrar por categoría
        <div className="productContainer">
            {ProductsData.map(( products, item ) => {
                const category = products.prCategory;                 
                
                if ( category  === "Uñas") {
                    return(
                        <div className="fichaProducto">
                            <ul>
                                <li>{products.prItem}</li>
                                <li>{products.prCategory}</li>
                                <li>{products.prName}</li>
                                <li>{products.prDescription}</li>
                                <li>{products.prPrice}</li>
                            </ul>                  
                        </div>)
                }
                return null                
            })}       
        </div>
    )
}

export default ProductCategory; 