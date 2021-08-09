import styled from "styled-components";

export const StyledMainBody = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    & .container {
        width: 80%;

        @media screen and (min-width: 1000px) {
            width: calc(85% + 30rem);
            padding: 0 5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        & .country {
            margin: 5rem 0;
            width: 100%;
            background-color: var(--element-color);
            box-shadow: var(--shadow-dark);
            border-radius: 10px;

            @media screen and (min-width: 1000px) {
                width: 19%;
                margin: 4rem;
            }
    
            & .top {
                width: 100%;
                height: auto;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                overflow: hidden;
    
                & img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }
            }
    
            & .details {
                margin-top: 0;
                padding: 4rem;
                color: var(--color-text);

                & h2 {
                    font-size: 2.2rem;
                    font-weight: 800;
                    text-transform: capitalize;
                    letter-spacing: .2rem;
                    padding: 3rem 0;

                    @media screen and (min-width: 1000px) {
                        padding: 1rem 0;
                    }
                }

                & p {
                    font-size: 2rem;
                    font-weight: 300;
                    text-transform: capitalize;
                    padding: .8rem 0;
                    @media screen and (min-width: 1000px) {
                        padding: 0;
                    }
                }
            }
        }
    }

`;