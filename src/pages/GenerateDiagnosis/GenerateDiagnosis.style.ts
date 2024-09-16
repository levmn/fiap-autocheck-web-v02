import styled from "styled-components";

export const StyledTitle = styled.h1`
    color: #3AC0E1;
    margin-bottom: 5px;
`;

export const StyledSubTitle = styled.p`
    color: #0f5a6c;
    margin-bottom: 40px;
`;

export const StyledDivButton = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1.6%;
    width: 100vw;
    cursor: pointer;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #3ac0e1;
    border: 2px solid #000000;
    border-radius: 8px;
    margin-bottom: 5%;
    padding: 1vw 0 1vw 0;
    
    & p {
        color: #000000;
        font-family: "Rubik", Arial, Helvetica, sans-serif;
        font-weight: 700;
    }
    
    & svg {
        padding: 1px 10px 1px 1px;
    }
`;

export const StyledSectionButton = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    
    & input {
        width: 100vw;
        padding: 10px 15px;
        border: 2px solid #0f5a6c;
        border-radius: 8px;
        margin-right: 5px;

        &::placeholder {
            font-family: "Rubik", Arial, Helvetica, sans-serif;
            color: #0f5a6c;
        }
    }

    & a {
        display: flex;
        padding: 0px 10px; 
        border-radius: 8px;
        background-color: #3AC0E1;
        border: 2px solid #0f5a6c;
        cursor: pointer;

        &:hover {
            background-color: #34b8d8;
            transition: 0.5s;
        }
    }
`;

export const StyledDescription = styled.p`
    font-size: 1rem;
    color: #0f5a6c;
    text-align: center;
    margin: 30px 0;
`;