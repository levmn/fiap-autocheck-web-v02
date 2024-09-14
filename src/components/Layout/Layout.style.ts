import styled from "styled-components";

export const StyledLayout = styled.div`
    min-height: calc(100vh - 250px);

    @media (max-width: 575px) {
        width: 80vw;
        margin: 5vw auto;
    }

    @media (min-width: 576px) and (max-width: 767px) {
        width: 70vw;
        margin: 5vw auto;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        width: 60vw;
        margin: 5vw auto;
    }

    @media (min-width: 992px) {
        width: 50vw;
        margin: 5vw auto;
    }
`;