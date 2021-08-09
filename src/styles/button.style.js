import styled from "styled-components";

export const StyledMainButton = styled.button`
    border: none;
    background-color: var(--element-color);
    text-align: center;
    font-size: 2rem;
    color: inherit;
    cursor: pointer;
    box-shadow: var(--shadow-dark);
    border-radius: 5px;

    &:focus {
        outline: none;
    }

    & a {
        padding: 1.5rem 2.5rem;
        display: flex;
        justify-content: space-between;
        color: inherit;
        text-decoration: none;

        & span {
            display: block;
            margin-left: 1rem;
        }
    }
`;