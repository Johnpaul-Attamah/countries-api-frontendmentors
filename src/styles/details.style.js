import styled from "styled-components";

export const StyledCountryDetails = styled.section`
    width: 100%;
    padding: 5rem 3rem;
    color: var(--color-text);

    @media screen and (min-width: 500px) {
        padding: 5rem;
    }

    & h2 {
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.2;
        letter-spacing: .2rem;
        text-transform: capitalize;
        padding: 5rem 0;
        
    }

    & svg {
        width: 20px;
        height: 20px;
        fill: var(--color-text);
    }

    & .container {
        width: 100%;
        margin-top: 10rem;

        @media screen and (min-width: 1000px) {
            display: flex;
        }

        & .info {
            @media screen and (min-width: 1000px) {
                display: flex;
            }
        }

        & .flag {
            margin-bottom: 5rem;
            width: 100%;
            height: auto;

            @media screen and (min-width: 1000px) {
                flex-basis: 40%;
            }

            & img {
                width: 100%;
                height: auto;
                object-fit: cover;
            }
        }

        & .details {
            width: 100%;

            @media screen and (min-width: 1000px) {
                flex-basis: 50%;
                margin-left: 15rem;
                margin-top: -5rem;
            }

            & p {
                font-size: 2rem;
                font-weight: 300;
                line-height: 1.6;
                letter-spacing: .2rem;
                text-transform: capitalize;
                padding: 1rem 0;

                @media screen and (min-width: 1000px) {
                   padding: 0;
                }
            }

            & .middle {
                padding-top: 3rem;

                @media screen and (min-width: 1000px) {
                   margin-left: 5rem;
                   padding: 0;
                }

                & span {
                    margin-left: 1rem;
                }
            }

            & .bottom {
                padding: 3rem 0;

                @media screen and (min-width: 1000px) {
                   padding: 5rem 0;
                }

                & button {
                    margin-right: 1rem;
                    margin-top: 2rem;
                }
            }
        }
    }
`;