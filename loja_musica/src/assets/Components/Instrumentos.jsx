import Style from "../css/Instrumentos.module.css"
import Violao from "../img/guitarrinha.jpg"
import Trombone from "../img/trombone.png"
import Trompete from "../img/trompete.jpg"
import Piano from "../img/piano.jpeg"
function Instrumento(){

    return(
        <div className={Style.instrumentos}>
            <div className={Style.violao}>
                <img className={Style.foto} src={Violao} alt="violão"/>
                <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p >
                <h4 className={Style.fonte}>R$989,50</h4>
            </div>

            <div className={Style.violao}>
            <img className={Style.foto} src={Trombone} alt="trombone"/>
                <p>TROMBONE DE VARA COM ROTOR TB 200VR LAQUEADO DOURADO </p >
                <h4 className={Style.fonte}>R$3.318</h4>
            </div>

            <div className={Style.violao}>
            <img className={Style.trompete} src={Trompete} alt="trompete"/>
                <p>TROMPETE LAQUEADO MILANO SI BEMOL SIb </p >
                <h4 className={Style.fonte}>R$1.987</h4>
            </div>

            <div className={Style.violao}>
            <img className={Style.piano} src={Piano} alt="piano"/>
                <p>PIANO DE CAUDA FRITZ DOBBERT CS-150 PRETO</p >
                <h4 className={Style.fonte}>R$78.999,00</h4>
            </div>
        </div>

    )
}

export default Instrumento