import Carousel from 'react-bootstrap/Carousel';
import "./CarouselHome.css"
import img1 from './Assets/Carrusel1.png'
import img2 from './Assets/Carrusel2.png'

function CarouselHome() {
  return (
    <>
      <Carousel className="container_carousel" variant="dark" >      
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />       
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />        
        </Carousel.Item> 

      </Carousel>
    </>
  );
}

export default CarouselHome;