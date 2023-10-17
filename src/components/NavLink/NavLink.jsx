import React from 'react';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import style from '../../routers/mentor/MentorTurma.css';

const NavLink = () => {
    return(

<div className={style.nav}>
<Nav defaultActiveKey="/home" className="flex-column">
<Nav.Link eventKey="Mentor" disabled><h4>Mentor</h4></Nav.Link>
<Nav.Link href='/mentor/discussao'>Discussão</Nav.Link>
<Nav.Link eventKey="link-2">Calendario</Nav.Link>
<Nav.Link eventKey="link-2">Notas</Nav.Link>
<Nav.Link href='/mentor/turma'>Turmas</Nav.Link>
<Nav.Link >Reports</Nav.Link>
<Nav.Link href='/mentor'>Perfil</Nav.Link>
</Nav>
</div>
    )
}

export default NavLink