import React from 'react';
import loadingImg from '../images/loader.gif';
import styled from 'styled-components';

const StyledLoader = styled.div`
    width: 100%auto;
    height: auto;

    & img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const Loader = () => {
    return (
        <StyledLoader>
            <img src={loadingImg} alt="loader" />
        </StyledLoader>
    )
}

export default Loader;
