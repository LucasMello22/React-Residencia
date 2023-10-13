import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image1 from '../../image/Embarque_Imagem2.jpg';
import image2 from '../../image/Embarque_Imagem1.jpg';
import image3 from '../../image/Embarque_Imagem4.jpg';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src={image1} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt="Second slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt="Third slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;