import styled from "styled-components";

export const StyledTitle = styled.h1`
    font-size: 35px;
    color: #3AC0E1;
    margin-bottom: 0;
`;

export const StyledSubTitle = styled.p`
    color: #0f5a6c;
    margin-bottom: 40px;
`;

export const StyledForm = styled.form`
    & input {
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
    font-size: 12px;
    text-decoration: underline;
    color: gray;
    }
`;

export const StyledRegister = styled.div`
    margin-bottom: 50px;

    & a {
        font-weight: 700;
        color: #3ac0e1;
    }
`;