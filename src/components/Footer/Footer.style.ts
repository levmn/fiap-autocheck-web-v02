import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    padding: 0 50px;
    background-color: #000000;
    color: #FFFFFF;
    position: relative;
    bottom: 0;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    #logo-footer {
        width: 300px;
    }
`;

export const StyledRedesSociais = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StyledIcon = styled.div`
    display: flex;
    gap: 10px;

    a {
        color: #FFFFFF;
        font-size: 35px;
        display: inline-block;
    }
`;