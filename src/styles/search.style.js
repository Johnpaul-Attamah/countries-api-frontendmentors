import styled from "styled-components";

export const StyledSearchInput = styled.div`
    width: 85%;
    margin: 5rem 0;
    position: relative;

    @media screen and (min-width: 1000px) {
        width: 60%;
        margin: 0;
    }

    & form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (min-width: 1000px) {
            justify-content: flex-start;
        }
    }

    & label {
        display: block;
        position: absolute;
        top: 32%;
        left: 13%;

        @media screen and (min-width: 500px) {
            left: 8%;
        }

        @media screen and (min-width: 1000px) {
            top: 30%;
            left: 4rem;
        }
        
        & .search {
            width: 25px;
            height: 25px;
            fill: var(--input-placeholder);
        }
    }
    
    & #search {
        display: block;
        width: 90%;
        padding: 3rem 10rem;
        font-size: 2rem;
        border: none;
        border-radius: 10px;
        line-height: 1.6;
        background-color: var(--input-fieldBg);
        color: var(--color-text);
        box-shadow: var(--shadow-dark);

        @media screen and (min-width: 1000px) {
            width: 70%;
            padding: 2rem 10rem;
        }

        &.error {
            border: 2px solid red;
        }

        &:focus,
        &:active {
            border: none;
            outline: none;
            padding: 3rem;
        }
    }

   & form #search:focus + label{
        display: none;
    }

    .error {
        padding: 2rem;
        font-size: 1.5rem;
        font-weight: 800;
        color: red;
        letter-spacing: .2rem;
        top: 15rem;
    }
`;