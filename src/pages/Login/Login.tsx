import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { NavbarLogged } from "../../components/Navbar/Navbar";
import { StyledForm, StyledRegister, StyledSubTitle, StyledTitle } from "./Login.style";
import { IoIosArrowBack } from "react-icons/io";


export default function Login() {
    return (
        <>
            <NavbarLogged />

            <Link to={"/"}>
                <IoIosArrowBack size={60} color="black"/>
            </Link>

            <StyledTitle className="titulo-pagina">Acessar Conta</StyledTitle>
            <StyledSubTitle className="descricao-pagina">Preencha seus dados para continuar</StyledSubTitle>

            <StyledForm action="" method="post" className="formulario">
                <input type="text" name="login" id="login" placeholder="E-mail ou CPF" />
                <input type="password" name="senha" id="senha" placeholder="Senha" />
                <div>
                    <a href="" className="lembrar-senha">Esqueci a minha senha</a>
                    <button type="submit" className="button-enviar"><a href="./cadastro-veiculo.html">Entrar</a></button>
                </div>
            </StyledForm>

            <StyledRegister>
                <p>Não tem uma conta na AutoCheck?</p>
                <a href="./cadastro.html">Crie seu cadastro!</a>
            </StyledRegister>

            <Footer />
        </>
    );
}