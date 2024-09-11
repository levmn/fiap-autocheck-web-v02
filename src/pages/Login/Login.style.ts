import styled from "styled-components";

export const StyledTitle = styled.h1`
    color: #3AC0E1;
    margin-bottom: 0;
`;

export const StyledSubTitle = styled.p`
    color: #0f5a6c;
    margin-bottom: 40px;
`;

export const StyledForm = styled.form`
    & input {
    font-family: "Rubik", Arial, Helvetica, sans-serif;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px 15px;
    border: 2px solid #0f5a6c;
    border-radius: 8px;
    }

    & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
    }

    & .lembrar-senha {
    text-decoration: underline;
    color: gray;
    }

    & .button-enviar {
    background-color: #3ac0e1;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    }

    & .button-enviar a {
    font-family: "Rubik", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #000000;
    }
`;

export const StyledRegister = styled.div`
    margin-bottom: 50px;

    & a {
        font-weight: 700;
        color: #3ac0e1;
    }
`;