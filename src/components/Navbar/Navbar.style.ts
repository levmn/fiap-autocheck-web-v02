import styled from "styled-components";

export const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 575px) {

    }

    @media (min-width: 576px) and (max-width: 767px) {

    }

    @media (min-width: 768px) and (max-width: 991px) {
        
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        
    }

    @media (min-width: 1200px) {

    }
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

    /* Media Queries */
    @media (max-width: 575px) {
        width: 220px;
    }

    @media (min-width: 576px) and (max-width: 767px) {
        width: 250px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        width: 250px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        width: 250px;
    }

    @media (min-width: 1200px) {
        width: 300px;
    }
`;

export const StyledList = styled.ul`
    
`;

export const StyledListItem = styled.li`
    list-style: none;
    display: inline-block;
    font-size: 1.2rem;
    flex-grow: 1;
    color: #0f5a6c;

    & a {
        text-decoration: none;
        color: #0f5a6c;
    }

    /* Media Queries */
    @media (max-width: 575px) {
        a {
            display: none;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        a {
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        a {
            display: none;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {

    }

    @media (min-width: 1200px) {

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
        font-size: 1.2rem;
        font-weight: 500;
        text-align: center;
    }

    /* Media Queries */
    @media (max-width: 575px) {
        width: 100px;
        height: 45px;

        & #user {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }

        & p {
            font-size: 0.9rem;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        width: 100px;
        height: 45px;

        & #user {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }

        & p {
            font-size: 0.9rem;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        width: 120px;
        height: 45px;

        & #user {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }

        & p {
            font-size: 1.2rem;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        width: 130px;
        height: 50px;

        & #user {
            width: 35px;
            height: 35px;
            margin-right: 10px;
        }

        & p {
            font-size: 1.2rem;
        }
    }

    @media (min-width: 1200px) {
        width: 130px;
        height: 50px;

        & #user {
            width: 35px;
            height: 35px;
            margin-right: 10px;
        }

        & p {
            font-size: 1.2rem;
        }
    }
`;
