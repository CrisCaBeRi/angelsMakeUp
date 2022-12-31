//Import bootstrap items for work
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselHome.css" //Import css to link styles 
//Import images to implement the carousel with bootstrap
import img1 from './Assets/Carrusel1.png'
import img2 from './Assets/Carrusel2.png'

function CarouselHome() {
  return (
    <>
      <Carousel className="container_carousel" variant="dark" > {/* The carousel tag is a method of bootstrap to divide the items, so is important to separate with this */}      
        <Carousel.Item>
          {/* tags inside of img are used like a fast styling form prevent to start coding inside the css file  */}
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
//export function to be used on pages later
export default CarouselHome;