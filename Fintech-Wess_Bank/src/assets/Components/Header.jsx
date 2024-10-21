import Style from "../css/Header.module.css"


function Header() {

    return (
        <div className={Style.navbar}>
            <h1 className={Style.titulo}>Wess Bank</h1>
            <div className={Style.lista}>
                <ul className={Style.link}>
                    <li>Página Inicial</li>
                    <li>Quem Somos</li>
                    <li>Produtos</li>
                </ul>
            </div>
        </div>

    )
}

export default Header