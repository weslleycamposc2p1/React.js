import Style from "../css/Mapa.module.css"

function Mapa(){

    return(
        <div className={Style.mapa}>
            <div className={Style.frame}>
            <iframe className={Style.iframe}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1227833051876!2d-46.69433512489202!3d-23.52808587882268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1729040144245!5m2!1spt-BR!2sbr"></iframe>
            </div>
            
            <div className={Style.textmapa}>
                <h1>Nossa Loja - Instrumentos Musicais</h1>

                <p>Se você é um amante da música, está em busca de um novo<br/>instrumento
            musical e não abre mão da qualidade, chegou ao lugar certo!<br/> Aqui em
            nossa loja você encontra os melhores itens, como: teclado,<br/>
            piano(digital e acústico), contrabaixo, bateria,guitarra, violão,
            sopro e muito mais! Nossos instrumentos possuem o selo de qualidade
            das melhores marcas do mercado! Escolha os seus favoritos e os
            receba em casa com toda a comodidade que você precisa. Confira
            nossas opções disponíveis e tenha em mãos instrumentos de ponta!</p>

            </div>
        </div>

    )
}

export default Mapa