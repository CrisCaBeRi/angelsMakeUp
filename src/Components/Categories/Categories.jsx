/* import React from "react"; */
import './Categories.css';
import { Link } from 'react-router-dom';
import imgNails from './Assets/Nails_img.png';
import imgCare from './Assets/Care_img.png';
import imgHair from './Assets/Hair_img.png';
import imgMake from './Assets/MakeUp_img.png';

const Categories = () => {

    return (
        <>
            <div className="banner_categories"><h1>Categorías</h1></div>        
            
            <div className='images_categories'>               

                <Link to = "/products_nails" className='nat-nav'>
                    <div className='container_category'>                    
                        <img src={imgNails} alt="" />
                        <h2 className='ds1'>Uñas</h2>                    
                    </div>
                </Link>

                <Link to="/products_care" className='nat-nav'>
                    <div className='container_category'> 
                        <img src={imgCare} alt="" />
                        <h2 className='ds2'>Cuidado Personal</h2>
                    </div>                
                </Link>

                <Link to="/products_hair" className='nat-nav'>
                    <div className='container_category'>
                        <img src={imgHair} alt="" />
                        <h2 className='ds4'>Cabello</h2>
                    </div>                
                </Link>

                <Link to="/products_makeup" className='nat-nav'>
                    <div className='container_category'>
                        <img src={imgMake} alt="" />
                        <h2 className='ds3'>Maquillaje</h2>
                    </div>                
                </Link>
            </div>
        </>
    )
}
export default Categories; 
