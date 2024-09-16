import { StyledButtonUnlogged, StyledButtonLogged, StyledDiv, StyledList, StyledListItem, StyledLogo, StyledNavbar, StyledDropdownMenu, StyledDropdownItem } from "./Navbar.style";
import Logo from "../../assets/images/autocheck-azul.png";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

interface NavbarProps {
    type: string;
}

export const Navbar = ({ type }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.clear();

        navigate("/", { replace: true });
        window.location.reload();
    };

    return (
        <StyledNavbar>
            <StyledDiv>
                <Link to="/">
                    <StyledLogo src={Logo} alt="Logotipo Autocheck" />
                </Link>

                <StyledList>
                    <StyledListItem className="main-menu">
                        {type === 'unlogged'
                            ?
                            (
                                <Link to="https://www.portoseguro.com.br/centros-automotivos-porto-seguro" className="menu-option" target="_blank">
                                    Parceria Porto
                                </Link>
                            )
                            :
                            (
                                <>
                                    <Link to="https://www.portoseguro.com.br/centros-automotivos-porto-seguro" className="menu-option" target="_blank">
                                        Parceria Porto
                                    </Link>

                                    <Link to="/diagnosticar" className="menu-option">
                                        Gerar Diagnóstico
                                    </Link>

                                    <Link to="/historico" className="menu-option">
                                        Histórico
                                    </Link>
                                </>
                            )
                        }
                    </StyledListItem>
                </StyledList>
            </StyledDiv>
            {type === 'unlogged'
                ?
                (
                    <Link to={"/login"}>
                        <StyledButtonUnlogged>
                            <FaRegUserCircle color="1696db" id="user" />
                            <p>Entrar</p>
                        </StyledButtonUnlogged>
                    </Link>
                )
                :
                (
                    <StyledButtonLogged onClick={toggleMenu}>
                        <FaRegUserCircle color="1696db" id="user" />
                    </StyledButtonLogged>
                )
            }

            {isMenuOpen && (
                <StyledDropdownMenu>
                    {/* <StyledDropdownItem>
                        <Link to="/perfil">Perfil</Link>
                    </StyledDropdownItem> */}

                    <StyledDropdownItem className="dropdown-item-small">
                        <Link to="/diagnosticar">Gerar Diagnóstico</Link>
                    </StyledDropdownItem>

                    <StyledDropdownItem className="dropdown-item-small">
                        <Link to="/historico">Histórico</Link>
                    </StyledDropdownItem>

                    <StyledDropdownItem className="dropdown-logout">
                        <span onClick={handleLogout}>Sair</span>
                    </StyledDropdownItem>
                </StyledDropdownMenu>
            )}
        </StyledNavbar>
    );
};