import Style from "../css/Home.module.css"

function Home(){

    return(
        <section className={Style.corpo}>
            <div className={Style.textloja}>
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
            <div className={Style.lojafoto}></div>

    
        </section>

    )
}

export default Home