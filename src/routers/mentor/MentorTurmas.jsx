import React from 'react';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import style from './MentorTurma.css';

const MenTurma = () => {
    return (
      <div>        
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