import {  useState } from 'react';
import "./Header.css"
import Logo from "./Assets/Logo.png";

import { Link } from 'react-router-dom';



const Header= () => { 
    
      
    const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu ) //Funcion que se encarga de cambiar el boleano de false a true cuando se le da clic
    }

    return (
        <>       

            <header className="header">
                <Link to = "/home">
                    <img className="logo" src={Logo} alt="Logo Header" /> 
                </Link>
                               

                <button onClick={ toggleMenu } className="Header-button"> {/* aqui se maneja el evento on clic para llamar a la funcion  */}
                    <svg className='Header-nav-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">

                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>

                {/* Menú hamburguesa */}
                <nav className={ `Header-nav ${ menu ? 'isActive' : '' }` }>  {/* operador ternario para mostrar los elementos cuanto el botón tenga el valor en true */}

                    <ul className="Header-ul"> {/* se despliega la lista de navegación */}
                    
                        <li className="Header-li">                            
                            <Link to="/products_nails" className='navbar-text'> {/* Uso de react router dom con LInk to  */}
                                <p style={{padding:"0", margin:"0"}}>Uñas</p>
                             </Link>
                        </li>

                        <li className="Header-li">                            
                            <Link to="/products_hair" className='navbar-text'>           
                                <p style={{padding:"0", margin:"0"}}> Cabello </p>
                             </Link>
                        </li>

                        <li className="Header-li">                            
                            <Link to="/products_care" className='navbar-text'>
                                <p style={{padding:"0", margin:"0"}}> Cuidado Personal</p>
                             </Link>
                        </li>
                        <li className="Header-li">                            
                            <Link to="/products_makeup" className='navbar-text'>
                                <p style={{padding:"0", margin:"0"}}> Maquillaje </p>
                             </Link>
                        </li>                        

                        <li className="Header-li" > 
                            <Link to= "/buycart" className='navbar-text'>
                                <i className="ri-shopping-cart-2-fill"> </i>
                            </Link>                            
                        </li>                       
                        
                    </ul>                 
                  
                </nav>
                
            </header>        
            
        </>
    ) 
             
}

export default Header;