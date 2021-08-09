import styled from "styled-components";

export const StyledMainHeader = styled.header`
    width: 100%;
    padding: 7rem 3rem;
    display: flex;
    justify-content: space-between;
    color: var(--color-text);
    background-color: var(--element-color);
    box-shadow: var(--shadow-dark);

    @media screen and (min-width: 1000px) {
        padding: 5rem 10rem;
    }

    & h1 {
        font-size: 2.5rem;
        font-weight: 800;
    }
    & div {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    & span {
        display: block;
        margin-left: 1rem;
        font-size: 1.5rem;
        font-weight: 300;
    }

    & svg {
        display: block;
        width: 22px;
        height: 22px;
        fill: var(--color-text);
    }
`;