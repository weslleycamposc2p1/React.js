import Style from '../css/Header.module.css'

function Header(){
    
    return(
        
         <div className={Style.cabecalho}>
            <div className={Style.inicio}>
                <ul className={Style.lista}>
                    <li>Home</li>
                    <li>Quem Somos</li>
                    <li>Instrumentos</li>
                    <li>Endereço</li>
                    <li>Contato</li>
                </ul>
              
            </div>
         </div>
        
    )
}

export default Header