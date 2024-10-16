import Style from "../css/Footer.module.css"
import Whats from "../img/whats.jpg"
import Insta from "../img/insta.jpg"
import Face from "../img/face.jpg"

function Footer(){

    return(
        <div className={Style.rodape}>
            <h3>Nossa Loja - Instrumentos Musicais</h3>
            <p>Rua Tito,54 Lapa <br/>São Paulo - Brasil</p>
            
            <div className={Style.foo}>
                    <img className={Style.final} src={Whats} alt="Whats" />
                </div>

                <div className={Style.foo}>
                    <img className={Style.final} src={Insta} alt="Insta" />
                </div>

                <div className={Style.foo}>
                    <img className={Style.final} src={Face} alt="Face" />
                </div>
        </div>

    )
}

export default Footer