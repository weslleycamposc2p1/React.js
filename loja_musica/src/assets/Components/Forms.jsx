import Style from "../css/Forms.module.css"
import Whats from "../img/whats.jpg"
import Insta from "../img/insta.jpg"
import Face from "../img/face.jpg"

function Forms() {

    return (
        <div className={Style.principal}>
            <div className={Style.formulario}>

                <form action="java.sp">
                    <label htmlFor="nomei"> entre com o seu nome:</label> <br />
                    <input type="text" name="nome" id="nomei" placeholder="digite seu nome aqui" required /> <br /> <br />
                    <label htmlFor="emaili"> entre com o seu e-mail:</label> <br />
                    <input type="email" name="emaili" id="emaili" placeholder="entre com o seu e-mail:" required /> <br /> <br />
                    <label htmlFor="pedido"> faça seu pedido por aqui:</label> <br />
                    <textarea name="pedido" id="pedido" placeholder="faça seu pedido por aqui" rows="8" cols="20"></textarea> <br />
                    <input type="submit" value="Enviar" />
                </form>
            </div>

            <div className={Style.social}>
                <h1>Acessem Nossa Redes Sociais</h1>
                <br />
                <div className={Style.rede}>
                    <img className={Style.media} src={Whats} alt="Whats" />
                </div>

                <div className={Style.rede}>
                    <img className={Style.media} src={Insta} alt="Insta" />
                </div>

                <div className={Style.rede}>
                    <img className={Style.media} src={Face} alt="Face" />
                </div>
            </div>
        </div>
    )
}

export default Forms