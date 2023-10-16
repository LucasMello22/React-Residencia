import logo from '../../image/Logo.png';
import style from './Header.module.css';
import { Link } from "react-router-dom";

function Header(){
    return(
          
        <nav>
            <div>
                <a className={style.aimg} href='/'><img src={logo} alt="Logotipo" /></a>
            </div>
            <div >
                <Link className={style.button} to="/singin"><span> ENTRAR</span></Link>
                <Link className={style.button} to="/singup"><span>CADASTRAR</span></Link>
            </div>
            
        </nav>

    )
}
export default Header;