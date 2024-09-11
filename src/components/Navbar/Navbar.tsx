import { StyledButtonUnlogged, StyledButtonLogged, StyledDiv, StyledList, StyledListItem, StyledLogo, StyledNavbar } from "./Navbar.style";
import Logo from "../../assets/images/autocheck-azul.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

export const NavbarUnlogged = () => {
    return (
        <StyledNavbar>
            <StyledDiv>
                <Link to="">
                    <StyledLogo src={Logo} alt="Logotipo Autocheck" />
                </Link>

                <StyledList>
                    <StyledListItem>
                        <Link to="https://www.portoseguro.com.br/centros-automotivos-porto-seguro">Parceria Porto
                        </Link>
                    </StyledListItem>
                </StyledList>
            </StyledDiv>

            <StyledButtonUnlogged href="">
                <FaRegUserCircle color="1696db" id="user" />
                <p>Entrar</p>
            </StyledButtonUnlogged>
        </StyledNavbar>
    );
};

export const NavbarLogged = () => {
    return (
        <StyledNavbar>
            <StyledDiv>
                <Link to="">
                    <StyledLogo src={Logo} alt="Logotipo Autocheck" />
                </Link>
                <StyledList>
                    <StyledListItem>
                        <Link to="https://www.portoseguro.com.br/centros-automotivos-porto-seguro">Parceria Porto
                        </Link>
                    </StyledListItem>
                </StyledList>
            </StyledDiv>

            <StyledButtonLogged href="">
                <FaRegUserCircle color="1696db" id="user" />
            </StyledButtonLogged>
        </StyledNavbar>
    )
}