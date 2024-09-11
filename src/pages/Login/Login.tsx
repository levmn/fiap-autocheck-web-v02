import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { NavbarLogged } from "../../components/Navbar/Navbar";
import { StyledForm, StyledRegister, StyledSubTitle, StyledTitle } from "./Login.style";
import { IoIosArrowBack } from "react-icons/io";
import { Layout } from "../../components/Layout/Layout";


export default function Login() {
    return (
        <>
            <NavbarLogged />

            <Layout>
                <Link to={"/"}>
                    <IoIosArrowBack size={60} color="black" />
                </Link>

                <StyledTitle>Acessar Conta</StyledTitle>
                <StyledSubTitle>Preencha seus dados para continuar</StyledSubTitle>

                <StyledForm action="" method="post">
                    <input type="text" name="login" id="login" placeholder="E-mail ou CPF" />
                    <input type="password" name="senha" id="senha" placeholder="Senha" />
                    <div>
                        <a href="">Esqueci a minha senha</a>
                        <button type="submit" className="button-enviar"><a href="">Entrar</a></button>
                    </div>
                </StyledForm>

                <StyledRegister>
                    <p>Não tem uma conta na AutoCheck?</p>
                    <a href="">Crie seu cadastro!</a>
                </StyledRegister>
            </Layout>

            <Footer />
        </>
    );
}