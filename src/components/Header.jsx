import React from 'react';
import { Moon, Sun } from '../images/vectors/Sprite';
import { StyledMainHeader } from '../styles/header.style';

const Header = ({ theme, onToggleDarkMode }) => {
    return (
        <StyledMainHeader>
            <h1>Where in the world?</h1>
            {
                theme === "dark" ? 
                (<div onClick={onToggleDarkMode}>
                    <Sun/>
                    <span>Light Mode</span>
                </div>) :

                (<div onClick={onToggleDarkMode}>
                    <Moon/>
                    <span>Dark Mode</span>
                </div>)
            }
        </StyledMainHeader>
    )
}

export default Header;
