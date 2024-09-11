import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";
import { NavbarLogged } from "../../components/Navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { StyledForm, StyledSubTitle, StyledTitle } from "./Registration.style";

export default function Registration() {
    return (
        <>
            <NavbarLogged />

            <Layout>
                <Link to={"/"}>
                    <IoIosArrowBack size={60} color="black" />
                </Link>

            <StyledTitle>Cadastrar Conta</StyledTitle>
            <StyledSubTitle>Preencha seus dados para continuar</StyledSubTitle>

            <StyledForm action="" method="post" className="formulario">
                <input type="text" name="nome" id="nome" placeholder="Nome completo" />
                <input type="text" name="cpf" id="cpf" placeholder="CPF" />
                <input type="text" name="email" id="email" placeholder="E-mail" />
                <input type="password" name="senha" id="senha" placeholder="Senha" />
                <input type="password" name="confirmar-senha" id="confirmar-senha" placeholder="Confirmar senha" />
                <div>
                    <button type="submit" className="button-enviar"><a href="./cadastro-veiculo.html">Cadastrar</a></button>
                </div>
            </StyledForm>
            </Layout>

            <Footer></Footer>
        </>
    )
}