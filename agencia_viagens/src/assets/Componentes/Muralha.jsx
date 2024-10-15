import styles from '../css/Muralha.module.css'
import ComponentesProps from './ComponentesProps'
import bandeira from '../imagens/bandeira_china.png'

function Muralha(){
    return(

        <div className={styles.fundo}>
            <ComponentesProps 
                lugar="China"
                texto="Castelos Medievais, lindas florestas, boa bebida, comidas típicas, clima agrádavel e etc."
                bandeira_pais={bandeira} className={styles.band} /> 
        </div>

    )
}
export default Muralha