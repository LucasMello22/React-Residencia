import React from 'react';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import style from './MentorTurma.css';

const MenTurma = () => {
    return (
      <div>
        <div className={style.nav}>
        <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link eventKey="Mentor" disabled><h4>Mentor</h4></Nav.Link>
        <Nav.Link eventKey="link-1">Discussão</Nav.Link>
        <Nav.Link eventKey="link-2">Calendario</Nav.Link>
        <Nav.Link eventKey="link-2">Notas</Nav.Link>
        <Nav.Link href='/mentor/turma'>Turmas</Nav.Link>
        <Nav.Link >Reports</Nav.Link>
        <Nav.Link href='/mentor'>Perfil</Nav.Link>
        </Nav>
        </div>
        
        <center className={style.table}>
        <Table  responsive>
      <thead>
        <tr>
            <th>Squads</th>
            <th>Turno</th>
            <th>Dia da Residência</th>
            <th>IES's</th>
            <th>Modalidade</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td>Squad 22</td>
            <td>Manhã </td>
            <td>Quarta</td>
            <td>UNIT</td>
            <td> </td>     
        </tr>
        <tr>
          <td>Squad NGPD</td>
            <td>Noite </td>
            <td>Sexta</td>
            <td>FICR</td>
            <td>Turma Completa</td>
        </tr>
        <tr>
        <td>Squad SJCC</td>
            <td>Manhã </td>
            <td>Sexta</td>
            <td>UNICAP</td>
            <td>Turma Completa</td>
        </tr>
      </tbody>
    </Table>
        </center>
      </div>
    )
  }
  
  export default MenTurma