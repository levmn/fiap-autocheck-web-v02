import styled from "styled-components";

export const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & a {
        flex-grow: 0;
        flex-shrink: 0;
    }
`;

export const StyledLogo = styled.img`
    width: 300px;
`;

export const StyledList = styled.ul`
    
`;

export const StyledListItem = styled.li`
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    font-size: 1rem;
    flex-grow: 1;
    color: #0f5a6c;

    & a {
        text-decoration: none;
        color: #0f5a6c;
    }
`;

export const StyledButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 130px;
    background-color: #e1f6fb;
    border-radius: 16px;
    border-style: none;
    text-decoration: none;
    margin: 10px;
    cursor: pointer;

    &:hover {
        background-color: #d6f1f8;
        transition: 0.5s;
    }

    & #user {
        width: 35px;
        height: 35px;
        margin-right: 15px;
    }

    & p {
        color: #0f5a6c;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
    }
`;
