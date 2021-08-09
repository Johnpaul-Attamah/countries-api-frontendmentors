import styled from "styled-components";

export const StyledFilterBox = styled.div`
    width: 90%;
    margin: 10rem auto;
    margin-bottom: 5rem;
    color: var(--color-text);
    position: relative;

    @media screen and (min-width: 1000px) {
        width: 40%;
        display: flex;
        justify-content: flex-end;
        margin: 0;
    }

    & .drop-down {
        width: 65%;
        padding: 3rem 4rem;
        display: flex;
        justify-content: space-between;
        background-color: var(--element-color);
        border-radius: 10px;
        box-shadow: var(--shadow-dark);

        & h2 {
            font-size: 2rem;
            font-weight: 600;
        }

        & .dropDown {
            width: 20px;
            height: 20px;
            display: block;
            fill: var(--color-text);
            cursor: pointer;
        }
    }

    & .regions {
        position: absolute;
        margin-top: 1rem;
        width: 65%;
        display: flex;
        flex-direction: column;
        background-color: var(--element-color);
        border-radius: 10px;
        box-shadow: var(--shadow-dark);

        @media screen and (min-width: 1000px) {
            top: 8.5rem;
        }

        & .region {
            padding: 1.5rem 4rem;
            line-height: 1.8;
            font-size: 2rem;
            cursor: pointer;

            &::last-child {
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }

        &.active {
            background-color: ${(props) => props.theme.elementReverse};
            color: ${(props) =>props.theme.elementColorReverse};
            
        }

            &:not(:last-child) {
                padding-bottom: 1rem;
            }
        }
    }


`;