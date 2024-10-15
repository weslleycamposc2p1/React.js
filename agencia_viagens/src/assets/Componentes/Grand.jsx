import styles from '../css/Grand.module.css'
import ComponentesProps from './ComponentesProps'
import bandeira from '../imagens/bandeira_eua.png'

function Grand(){
    return(

        <div className={styles.fundo}>
            <ComponentesProps 
                lugar="Estados Unidos"
                texto="Castelos Medievais, lindas florestas, boa bebida, comidas típicas, clima agrádavel e etc."
                bandeira_pais={bandeira} /> 

        </div>

    )
}
export default Grand