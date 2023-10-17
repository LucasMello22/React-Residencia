import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Slider from '../../components/SlideShow/slide';
import './Singin.css';
function HorizontalExample() {
  return (
    <div className='container'>
    <Form classname='form-container' id='forms'>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Senha
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Senha" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Mantenha-me conectado" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">ENTRAR</Button>
        </Col>
      </Form.Group>
    </Form>

    <Slider></Slider>
    </div>
  );
}

export default HorizontalExample;