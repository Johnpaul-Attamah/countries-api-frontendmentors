import styled from "styled-components";

export const StyledPagination = styled.section`
    width: 100%;
    margin: 5rem 0;
    margin-left: -2rem;
    padding: 2rem 0;
    display: flex;
    color: var(--color-text);

    @media screen and (min-width: 500px) {
        margin-left: 4rem;
    }
    
    @media screen and (min-width: 1000px) {
        margin-left: 35rem;
    }

    & ul.deactivate {
        display: none;
    }

    & ul {
        display: flex;

        & li:not(:last-child) {
            margin-right: 1rem;
        }
    }

    & li {
        width: 40px;
        text-align: center;
        list-style: none;
        padding: 1.4rem;
        font-size: 1.5rem;
        font-weight: 600;
        background-color: var(--element-color);
        cursor: pointer;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
        border-radius: 5px;
        flex: 1;

        &.buttons {
            padding: 0;
        }

        & button {
            display: block;
            width: 100%;
            height: 100%;
            font-size: inherit;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }

        & button:focus {
            outline: none;
        }

        & svg {
            width: 20px;
            height: 20px;
            fill: var(--color-text);
        }

        &:hover svg,
        &.active svg {
            fill: ${(props) =>props.theme.elementColorReverse};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.elementReverse};
            color: ${(props) =>props.theme.elementColorReverse};
        }
    }
`;