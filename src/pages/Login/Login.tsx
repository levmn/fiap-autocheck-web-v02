import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { StyledForm, StyledRegister, StyledSubTitle, StyledTitle } from "./Login.style";
import { IoIosArrowBack } from "react-icons/io";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/Button/Button";
import { useState } from "react";


export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const validarEmailOuCPF = (input: string): boolean => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexCPF = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
        return regexEmail.test(input) || regexCPF.test(input);
      };
      
    const validarSenha = (senha: string): boolean => {
        return senha.length >= 8;
    };

    const handleClick = () => {
        if (!validarEmailOuCPF(username)) {
            alert('Por favor, insira um e-mail ou CPF válido!')
            return;
        }

        if (!validarSenha(password)) {
            alert("A senha deve ter no mínimo 8 caracteres.");
            return;
        }

        console.log("Login bem-sucedido!");
    }

    return (
        <>
            <Navbar type="logged" />

            <Layout>
                <Link to={"/"}>
                    <IoIosArrowBack size={60} color="black" />
                </Link>

                <StyledTitle>Acessar Conta</StyledTitle>
                <StyledSubTitle>Preencha seus dados para continuar</StyledSubTitle>

                <StyledForm action="" method="post">
                    <input
                        type="text"
                        name="login"
                        id="login"
                        placeholder="E-mail ou CPF"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div>
                        <a href="">Esqueci a minha senha</a>
                        <Button type="button" onClick={handleClick}>
                            Entrar
                        </Button>
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