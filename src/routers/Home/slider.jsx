import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image1 from 'C:\\Users\\neto\\Desktop\\Estudos ADS\\React-Residencia\\React-Residencia\\src\\image\\Embarque_Digital_logo.jpg';
import image2 from 'C:\\Users\\neto\\Desktop\\Estudos ADS\\React-Residencia\\React-Residencia\\src\\image\\Embarque_Imagem1.jpg';
import image3 from 'C:\\Users\\neto\\Desktop\\Estudos ADS\\React-Residencia\\React-Residencia\\src\\image\\Embarque_Imagem4.jpg';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;