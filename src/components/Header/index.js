//import "../../styles/header/styles-header.css"
import {HeaderStyle , TitleHeader , NavDiv , NavLink} from "./styles";

const Header = () => {

    return (
        <HeaderStyle>
            <TitleHeader>
                <h1>GATITOS RANDOM QUE TE MEJORAN EL DÍA</h1>
            </TitleHeader>
            <NavDiv>
                <nav>
                    <ul>
                        <li><NavLink href="/">Salir</NavLink></li>                        
                    </ul>
                </nav>
            </NavDiv>
        </HeaderStyle>
    );

}

export default Header;