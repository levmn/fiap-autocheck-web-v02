import { StyledDiv, StyledFooter, StyledIcon, StyledRedesSociais } from "./Footer.style";
import Logo from "../../assets/images/autocheck-branco.png";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

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
                    <a href="">
                        <IoLogoInstagram />
                    </a>
                    <a href="">
                        <IoLogoLinkedin />
                    </a>
                    <a href="">
                        <IoLogoFacebook />
                    </a>
                </StyledIcon>
            </StyledRedesSociais>
        </StyledFooter>
    );
}