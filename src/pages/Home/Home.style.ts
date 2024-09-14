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

export const StyledServicos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px 0;
    background-color: #FFFFFF;

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #000000;
    }

    p {
        font-size: 1.5rem;
        font-weight: 400;
        color: #000000;
        text-align: center;
    }
`;

export const StyledServicosCards = styled.div`
    display: flex;
    gap: 20px;
    padding: 50px 0;
    justify-content: center;

    article {
        display: flex;
        flex-direction: column;
        gap: 10px;

        img {
            width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 5px;
        }

        .card-texto {
            display: flex;
            flex-direction: column;
            gap: 5px;

            h3 {
                font-size: 1.5rem;
                font-weight: 700;
                color: #000000;
            }

            span {
                font-size: 1rem;
                font-weight: 400;
                color: #000000;
            }
        }
    }
`;

// Sessão de serviços