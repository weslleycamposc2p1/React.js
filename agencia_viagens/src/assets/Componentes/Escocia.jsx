import styles from '../css/Escocia.module.css'
import ComponentesProps from './ComponentesProps'
import bandeira from '../imagens/bandeira_escocia.png'

function Escocia(){
    return(

        <div className={styles.fundo}>
           <ComponentesProps 
                lugar="Escocia"
                texto="Castelos Medievais, lindas florestas, boa bebida, comidas típicas, clima agrádavel e etc."
                bandeira_pais={bandeira} /> 
            

        </div>



    )
}

export default Escocia
