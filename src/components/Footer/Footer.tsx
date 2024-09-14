import { StyledDiv, StyledFooter, StyledIcon, StyledRedesSociais } from "./Footer.style";
import Logo from "../../assets/images/autocheck-branco.png";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledDiv>
                <img id="logo-footer" src={Logo} alt="" />
                <p>AutoCheck &copy; 2024 - Todos os direitos reservados</p>
            </StyledDiv>

            <StyledRedesSociais>
                <p>Acompanhe as nossas redes sociais</p>
                <StyledIcon>
                    <Link to="https://www.instagram.com/porto/" target="_blank">
                        <IoLogoInstagram />
                    </Link>
                    <Link to="https://www.linkedin.com/company/porto/" target="_blank">
                        <IoLogoLinkedin />
                    </Link>
                    <Link to="https://www.facebook.com/porto" target="_blank">
                        <IoLogoFacebook />
                    </Link>
                </StyledIcon>
            </StyledRedesSociais>
        </StyledFooter>
    );
}