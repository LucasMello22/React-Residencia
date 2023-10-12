import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Contact = () => {
  return (
    <div>
      <h1>Pagina de contatos</h1>
      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="Perfil" variant='secondary' >
          Fulano!
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" >Perfil</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Turmas</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Horarios</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/">Sair</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Contact