import logo from '../../image/Logo.png';
import style from './Header.module.css';

function Header(){
    return(
          
        <nav>
            <div>
                <img src={logo} alt="Logotipo"/>
            </div>
            <div >
                <button className={style.button} to="/singin"><span>ENTRAR</span></button>
                <button className={style.button} to="/singup"><span>CADASTRAR</span></button>
            </div>
            
        </nav>

    )
}
export default Header;