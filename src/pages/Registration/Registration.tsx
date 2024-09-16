import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { StyledForm, StyledSubTitle, StyledTitle } from "./Registration.style";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";

export default function Registration() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [CPF, setCPF] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        const logged = localStorage.getItem('logged') === 'true';
        console.log('Estado de logged:', logged);
        if (logged) {
            alert('Usuário logado')
            navigate('/', { state: { logged: true }})
        }
        }, [navigate])

    const validarEmail = (input: string): boolean => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(input);
    };

    const validarCPF = (input: string): boolean => {
        const regexCPF = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
        return regexCPF.test(input);
    }

    const validarSenha = (senha: string): boolean => {
        return senha.length >= 8;
    };

    const confirmaSenha = (senha: string, confirmarSenha: string): boolean => {
        return senha === confirmarSenha;
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!validarEmail(email)) {
            alert('Por favor, insira um e-mail válido!')
            return;
        }

        if (!validarCPF(CPF)) {
            alert('Por favor, insira um CPF válido!')
            return;
        }

        if (!validarSenha(password)) {
            alert('A senha deve ter no mínimo 8 caracteres!')
            return;
        }

        if (!confirmaSenha(password, confirmPassword)) {
            alert('As senhas não coincidem!')
            return;
        }

        alert('Cadastro realizado com sucesso! Agora cadastre um veículo.');
        localStorage.setItem('logged', 'true');
        navigate('/cadastrar-veiculo')
    }

    return (
        <>
            <Navbar type="unlogged" />

            <Layout>
                <Link to={"/"}>
                    <IoIosArrowBack size={40} color="black" />
                </Link>

                <StyledTitle>Cadastrar Conta</StyledTitle>
                <StyledSubTitle>Preencha seus dados para continuar</StyledSubTitle>

                <StyledForm action="" method="post" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome completo"
                    />

                    <input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        onChange={(e) => setCPF(e.target.value)}
                    />

                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        name="confirmar-senha"
                        placeholder="Confirmar senha"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <div>
                        <Button type="submit" onClick={handleClick}>
                            Cadastrar
                        </Button>
                    </div>

                </StyledForm>
            </Layout>

            <Footer />
        </>
    )

}