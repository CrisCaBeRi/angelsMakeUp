import {  useState } from 'react';
import "./Header.css"
import Logo from "./Assets/Logo.png";


const Cabecera = () => { 
    
      
    const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu ) //Funcion que se encarga de cambiar el boleano de false a true cuando se le da clic
    }

    return (
        <>
            <header className="header">
                <img className="logo" src={Logo} alt="Logo Header" />                 

                <button onClick={ toggleMenu } className="Cabecera-button"> {/* aqui se maneja el evento on clic para llamar a la funcion  */}
                    <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">

                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>

                {/* Menú hamburguesa */}
                <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` }>  {/* operador ternario para mostrar los elementos cuanto el botón tenga el valor en true */}

                    <ul className="Cabecera-ul"> {/* se despliega la lista de navegación */}
                        <li className="Cabecera-li"> Hola </li>
                        <li className="Cabecera-li"> Dos </li>
                        <li className="Cabecera-li"> Tres </li>
                        <li className="Cabecera-li" >Cuatro </li>
                        <li className="Cabecera-li" > 
                            <i className="ri-shopping-cart-2-fill"> </i>
                        </li>                       
                        
                    </ul>                 
                  
                </nav>
                
            </header>
        </>
    ) 
             
}

export default Cabecera