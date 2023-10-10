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
                 <Dropdown.Item href="#/action-1" >Perfil</Dropdown.Item>
                 <Dropdown.Item href="#/action-2">Turmas</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Horarios</Dropdown.Item>
                <Dropdown.Divider />
                  <Dropdown.Item href="/">Sair</Dropdown.Item>
             </Dropdown.Menu>
             </Dropdown>
            </div>
            
        </nav>

    )
}
export default Header2;