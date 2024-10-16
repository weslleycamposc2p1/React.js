import Style from '../css/Header.module.css'
import{Link} from 'react-router-dom'

function Header(){
    
    return(
        
         <div className={Style.cabecalho}>
            <div className={Style.inicio}>
                <ul className={Style.lista}>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/">Quem Somos</Link></li>
                    <li> <Link to="Instrumentos">Instrumento</Link></li>
                    <li> <Link to="Mapa">Endereço</Link></li>
                    <li> <Link to="Forms">Contato</Link></li>
                </ul>
            </div>
         </div>
        
    )
}

export default Header