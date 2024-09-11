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

    /* Media Queries */
    @media (max-width: 575px) {
        height: 150px;
        padding: 0 20px;
        align-items: center;
    }

    @media (min-width: 576px) and (max-width: 767px) {
        height: 150px;
        padding: 0 20px;
        align-items: center;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        height: 150px;
        padding: 0 20px;
        align-items: center;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        
    }

    @media (min-width: 1200px) {

    }
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    #logo-footer {
        width: 300px;
    }

    /* Media Queries */
    @media (max-width: 575px) {
        #logo-footer {
            width: 200px;
        }

        p {
            font-size: 0.7rem;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        #logo-footer {
            width: 250px;
        }

        p {
            font-size: 0.8rem;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        #logo-footer {
            width: 250px;
        }

        p {
            font-size: 0.9rem;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        #logo-footer {
            width: 250px;
        }

        p {
            font-size: 1rem;
        }
    }

    @media (min-width: 1200px) {
        #logo-footer {
            width: 300px;
        }
    }
`;

export const StyledRedesSociais = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        font-size: 20px;
    }

    /* Media Queries */
    @media (max-width: 575px) {
        p {
            display: none;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        p {
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        p {
            font-size: 15px;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        p {
            font-size: 17px;
        }
    }

    @media (min-width: 1200px) {
        p {
            font-size: 20px;
        }
    }
`;

export const StyledIcon = styled.div`
    display: flex;
    gap: 10px;

    a {
        color: #FFFFFF;
        font-size: 35px;
        display: inline-block;
    }

  /* Media Queries */
    @media (max-width: 575px) {
        a {
            font-size: 35px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        a {
            font-size: 35px;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        a {
            font-size: 35px;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        a {
            font-size: 35px;
        }
    }

    @media (min-width: 1200px) {
        a {
            font-size: 35px;
        }
    }
`;