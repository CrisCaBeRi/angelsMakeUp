import React from "react";
import "./Footer.css";

const Footer = () => {        
    return (
        <>
            <footer>

                <div className="adress">
                    <h2> Dirección </h2>
                    <p>Calle 132d # 156 - 14 <br />Bogotá, Suba </p>
                </div>

                <div className="contact">
                    <h2>Siguenos en redes</h2>
                    <div className="social">
                        <i class="ri-instagram-line"></i>
                        <i class="ri-facebook-circle-fill"></i>
                        <i class="ri-whatsapp-line"></i>
                    </div>                
                </div>

                <div className="about-us">
                    <h2>Sobre nosotros</h2>
                    <p>Somos una empresa dedicada al comercio y distribución de artículos de belleza y cuidado personal que opera desde el año 2019.</p>
                </div>      
                
            </footer>           
        </>     
    )

}

export default Footer; 