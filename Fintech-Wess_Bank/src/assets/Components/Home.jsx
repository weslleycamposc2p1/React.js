import Style from "../css/Home.module.css"

function Home(){

    return(
        <section className={Style.fundo}>
            <div className={Style.meio1}>
                <h3 className={Style.texthome}>Faça parte da<br/>Wess Bank</h3>
                <p className={Style.texthome2}>Somos  mais que um banco,<br/> somos uma família!</p>
            </div>
            <div className={Style.meio2}></div>
        </section>
    )
}

export default Home