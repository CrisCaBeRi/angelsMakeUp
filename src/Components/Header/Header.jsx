//Import the hook from react, the link from react router, some images and the files of styles. 
import {  useState } from 'react';
import "./Header.css"
import Logo from "./Assets/Logo.png";
import { Link } from 'react-router-dom';

const Header= () => {   
    const [ menu , setMenu ] = useState( false );  //const var to be used like a state to identify when the user clic the nav "hamburguer" to show all the information of sections  

    const toggleMenu = () => {
        setMenu( !menu ) //This function is maded to change the state of the button and use the styles in css withthe two states, the true valor is used to show the menu in bottom direction 
    }
    return (
        <>       
            <header className="header">
                <Link to = "/home">
                    <img className="logo" src={Logo} alt="Logo Header" /> {/* use of the image imported */}
                </Link>                             
                <button onClick={ toggleMenu } className="Header-button"> {/* Call of the function to change the state of the button*/}
                    <svg className='Header-nav-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">

                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>

                {/*Hamburguer navbar*/}
                <nav className={ `Header-nav ${ menu ? 'isActive' : '' }` }>  {/* ternary operator to add a class that is used in css to show the navbar on mobile version */}
                    <ul className="Header-ul"> 
                        <li className="Header-li">                            
                            <Link to="/products_nails" className='navbar-text'> {/* Use od react router dom   */}
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