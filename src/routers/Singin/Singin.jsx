import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Slider from '../../components/SlideShow/slide';
import style from'./Singin.css';
function HorizontalExample() {
  return (
    <div className={style.conteiner}>
    <div classname='formcontainer'>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>Senha</Form.Label>
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
    </div>
    <div className={style.slide}> <Slider></Slider></div>
    </div>
    
  );
}

export default HorizontalExample;