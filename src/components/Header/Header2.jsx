import logo from '../../image/Logo.png';
import style from './Header.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header2 (){
    return(
          
        <nav>
            <div>
                <img src={logo} alt="Logotipo"/>
            </div>
            <div >
              <Dropdown data-bs-theme="ligth">
                 <Dropdown.Toggle id="Perfil" variant='secondary' >
                 Olá Fulano!
                 </Dropdown.Toggle>

                <Dropdown.Menu>
                 <Dropdown.Item href="/mentor" >Perfil</Dropdown.Item>
                 <Dropdown.Item href="/mentor/turma">Turmas</Dropdown.Item>
                <Dropdown.Item href="/mentor/calendario">Calendario</Dropdown.Item>
                <Dropdown.Divider />
                  <Dropdown.Item href="/">Sair</Dropdown.Item>
             </Dropdown.Menu>
             </Dropdown>
            </div>
            
        </nav>

    )
}
export default Header2;