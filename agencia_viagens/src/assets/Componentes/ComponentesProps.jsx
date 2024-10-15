import styles from '../css/ComponentesProps.module.css'

function ComponentesProps({lugar,texto,bandeira_pais}){
    return(
        <div className={styles.corpo}>
            <h2>Venha conhecer esse lugar íncrivel {lugar}! </h2>
            <p>{texto}</p>
            <img src={bandeira_pais} alt="" />
        </div>
    )
}

export default ComponentesProps