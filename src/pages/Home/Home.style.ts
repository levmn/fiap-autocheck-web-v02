import styled from "styled-components";
import backgroundImage from "../../assets/images/imagem-section-principal.jpg";

// Sessão principal da Home
export const StyledHome = styled.section`
    position: relative;
    height: 538px;
    width: 100vw;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        filter: hue-rotate(-5deg) brightness(0.5);
        z-index: -1;
    }

    h1, p {
        position: relative;
        z-index: 1;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-top: 160px;

    h1 {
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: 700;
        text-align: center;
        color: #FFFFFF;
    }

    p {
        font-size: 1.3rem;
        font-weight: 300;
        text-align: center;
        margin-bottom: 20px;
        width: 350px;
        color: #FFFFFF;
    }
`;

export const StyledButton = styled.div`
    display: flex;
    gap: 20px;
`;

export const StyledButtonSaibaMais = styled.button`
    background-color: #1696DB;
    border-radius: 8px;
    border-style: none;
    height: 45px;
    width: 155px;
    font-size: 1rem;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        background-color: #138ccd;
        transition: 0.5s;
    }
`;

export const StyledButtonAdquirirServico = styled.button`
    background-color: #FFFFFF;
    border-radius: 8px;
    border-style: none;
    height: 45px;
    width: 170px;
    font-size: 1rem;
    font-weight: 600;
    color: #1696DB;
    cursor: pointer;

    &:hover {
        background-color: #EFEFEF;
        transition: 0.5s;
    }
`;

// Sessão de serviços
export const StyledServicos = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px 0;
    background-color: #FFFFFF;

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #0f5a6c;
        text-align: center;
        margin-top: 40px;
    }

    p {
        width: 80vw;
        font-size: 1.2rem;
        font-weight: 400;
        color: #0f5a6c;
        text-align: center;
    }
`;

export const StyledServicosCards = styled.div`
    display: flex;
    gap: 20px;
    margin: 0 10% 40px;

    article {
        display: flex;
        flex-direction: column;
        gap: 10px;

        img {
            border-radius: 8px;
            filter: hue-rotate(-5deg) brightness(0.5);
        }

        img:hover {
            cursor: pointer;
            filter: hue-rotate(-5deg) brightness(0.8);
            transition: 0.5s;
        }

        .card-texto {
            text-align: center;
            margin: 15px 0;
            color: #0f5a6c;

            h3 {
                font-size: 1.5rem;
                font-weight: 700;
                color: #0f5a6c;
            }

            span {
                font-size: 1rem;
                font-weight: 400;
                color: #0f5a6c;
            }
        }
    }
`;

// Sessão de integrantes
export const StyledIntegrantes = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px 0;
    background-color: #EFF4FF;

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #0f5a6c;
        text-align: center;
        margin-top: 40px;
    }

    p {
        width: 80vw;
        font-size: 1.2rem;
        font-weight: 400;
        color: #0f5a6c;
        text-align: center;
    }
`;

export const StyledIntegrantesCards = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 40px;
    margin-bottom: 40px;

    article {
        display: flex;
        flex-direction: column;
        gap: 10px;

        img {
            border: 5px solid #3AC0E1;
            border-radius: 50%;
            width: 240px;
            height: 240px;
        }

        h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0f5a6c;
        }

        span {
            font-size: 1rem;
            font-weight: 400;
            color: #0f5a6c;
        }
    }
`;

// Sessão de contato
export const StyledContato = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px 0;
    background-color: #FFFFFF;

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #0f5a6c;
        text-align: center;
        margin-top: 40px;
    }

    p {
        width: 80vw;
        font-size: 1.2rem;
        color: #0f5a6c;
        text-align: center;
    }
`;

export const StyledContatos = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 1rem;
        color: #0f5a6c;
        margin: 10px 0 0 5px;
        gap: 10px;
        width: 100%;
`;

export const StyledContainerContato = styled.div`
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 30px;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30vw;

    #nome,
    #email,
    #assunto {
        font-family: "Rubik", Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin: 0 0 15px 0;
        padding: 10px 10px;
        border: 1px solid #0f5a6c;
        border-radius: 8px;
    }

    #mensagem {
        height: 210px;
        font-family: "Rubik", Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin: 0 0 15px 0;
        padding: 10px 10px;
        border: 1px solid #0f5a6c;
        border-radius: 8px;
    }
`;

export const StyledButtonContato = styled.a`
    background-size: contain;
    height: 30px;
    border: none;
    cursor: pointer;
    align-self: flex-end;
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: min-content;

    iframe {
        width: 25vw;
        border: 1px solid #0f5a6c;
        border-radius: 8px;
    }
`;