import React from 'react';
//import { FaCentercode } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Nav from 'react-bootstrap/Nav';
import './MentorDiscussao.css';
//import { NavbarCollapse } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';



const MenDiscussao = () => {
  return (
    <div>
      <Navbar className="Nav">
        <Container>
          <Navbar.Collapse className="justify-content-start">
            <Navbar.Text>SQUAD</Navbar.Text>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Squad 22</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Squad SJCC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Squad NGPD</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Outros</NavDropdown.Item>
            </NavDropdown>
            </Navbar.Collapse>
            <Navbar.Toggle />
        </Container>
      </Navbar>

      <Table responsive="sm" className="tabela">
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Status</th>
            <th>Atividade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>*</td>
            <td>22/12</td>
            <td>23:59</td>
            <td>Pendente</td>
            <td>Entrega Parcial</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm" className="tabela">
      <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Responsável</th>
            <th>Categoria</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>*</td>
            <td>Criação de protótipo</td>
            <td>Fulaninho coisinha</td>
            <td></td>
            <td>Em porgresso</td>
          </tr>
          <tr>
            <td>*</td>
            <td>xx/xx</td>
            <td>xx:xx</td>
            <td>xxxxxxxx</td>
            <td> </td>
          </tr>
        </tbody>
      </Table>

    </div>
  )
}
export default MenDiscussao