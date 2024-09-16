import { StyledButtonUnlogged, StyledButtonLogged, StyledDiv, StyledList, StyledListItem, StyledLogo, StyledNavbar } from "./Navbar.style";
import Logo from "../../assets/images/autocheck-azul.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

interface NavbarProps {
    type: string;
}

export const Navbar = ({ type }: NavbarProps) => {
    return (
        <StyledNavbar>
            <StyledDiv>
                <Link to="/">
                    <StyledLogo src={Logo} alt="Logotipo Autocheck" />
                </Link>

                <StyledList>
                    <StyledListItem>
                        {type === 'unlogged'
                        ?
                        (
                            <Link to="https://www.portoseguro.com.br/centros-automotivos-porto-seguro" target="_blank">
                                Parceria Porto
                            </Link>
                        )
                        :
                        (
                            <>
                            <Link to="https://www.portoseguro.com.br/centros-automotivos-porto-seguro" target="_blank">
                                Parceria Porto
                            </Link>
                            
                            <Link to="/diagnosticar">
                                Gerar diagnóstico
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
                    <StyledButtonLogged>
                        <FaRegUserCircle color="1696db" id="user" />
                    </StyledButtonLogged>
                )
            }
        </StyledNavbar>
    );
};