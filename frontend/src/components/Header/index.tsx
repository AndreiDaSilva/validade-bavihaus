import logo from "../../assets/img/logo.png";

import "./style.css"

function Header() {
    return(
        <header>
            <div className="logo-container">
                <img src={logo} alt="Bavihaus" />
                <h1>Controle da Validade Bavihaus</h1>
                <p>Desenvolvido por
                    <a href="https://www.instagram.com/es.andreisilva"> @Andreisilva</a>
                </p>
            </div>
        </header>
    )
}

export default Header
