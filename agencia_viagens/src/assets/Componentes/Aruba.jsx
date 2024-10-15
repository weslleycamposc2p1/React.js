import styles from '../css/Aruba.module.css'
import ComponentesProps from './ComponentesProps'
import bandeira from '../imagens/bandeira_aruba.png'


function Aruba(){
    return(

        <div className={styles.fundo}>
            <ComponentesProps 
                lugar="Aruba"
                texto="Castelos Medievais, lindas florestas, boa bebida, comidas típicas, clima agrádavel e etc."
                bandeira_pais={bandeira} /> 
        </div>
    )

}
export default Aruba