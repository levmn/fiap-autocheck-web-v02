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

export const StyledDivButton = styled.div`
    display: flex;
    padding-left: 1.6%;
    align-items: center;
    width: 100%;

`;

export const StyledDescription = styled.p`
    display: flex;
    color: #0f5a6c;
    font-size: 13px;
    justify-content: center;
    margin-top: 6%;
    margin-bottom: 1.5%;
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

export const StyledSearchIcon = styled.div`
    size: 40px; 
    color: black; 
    cursor: pointer; 
    margin-left: 10px; 
    &:hover {
        color: gray;
    }
`;

export const StyledSectionButton = styled.div`
    display: flex;
    flex-direction: column;

`;

export const StyledForm = styled.form`
    & input {
    width: 100%;
    padding: 10px 15px;
    border: 2px solid #0f5a6c;
    border-radius: 8px;
    }

    & div {
    display: flex;
    justify-content: end;
    
    }

    & .button-enviar {
    background-color: #3ac0e1;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    }

    & .button-enviar a {
    font-size: 1rem;
    font-weight: 700;
    color: #000000;
    
    }
     
`;
export const StyledDiv = styled.div`
    display: flex; 
    align-items: center;
    justify-content: flex-end;
    
    &  svg {
    margin: auto 0;
    border-radius: 8px;
    border: 2px solid #0f5a6c;
    background-color: #3AC0E1;
    position: absolute;

    }
    `;