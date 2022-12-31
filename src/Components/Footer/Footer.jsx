//Import the files of styles and the method Carousel of bootstrap 
import React from "react";
import "./Footer.css";
import Carousel from 'react-bootstrap/Carousel';
const Footer = () => {        
    return (
        <>
            <footer> {/* tag footer defined to divide sections  */}
                <Carousel className="container_carousel_footer" variant="dark" >  {/* same use like carousel home, acces from  the carousel method of bootstrap to create a carousel, but in this case is maded with text information and some images  */}   
                    <Carousel.Item>
                        <div className="adress">
                            <h2> Dirección </h2>
                            <p>Calle 132d # 156 - 14 <br />Bogotá, Suba </p>
                        </div>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                    <div className="contact">
                        <h2>Siguenos en redes</h2>
                        <div className="social">                                               
                            <i class="ri-instagram-line" style = {{color:"pink"}}></i>
                            <i class="ri-facebook-circle-fill" style = {{color:"lightblue"}}></i>
                            <i class="ri-whatsapp-line" style = {{color:"lightgreen"}}></i>
                        </div>                
                    </div>                      
                    </Carousel.Item> 
                    <Carousel.Item>
                        <div className="about-us">
                            <h2>Sobre nosotros</h2>
                            <p>Somos una empresa dedicada al comercio y distribución de artículos <br/> de belleza y cuidado personal que opera desde el año 2019.</p>
                        </div> 
                    </Carousel.Item>
                </Carousel>                     
            </footer>
        </>     
    )
}
export default Footer; 