import React from 'react';
import { SearchIcon } from '../images/vectors/Sprite';
import { StyledSearchInput } from '../styles/search.style';

const Search = ({searchInput, onSearchChange, error }) => {
    return (
        <StyledSearchInput>
            <form onSubmit={(e) => onSearchChange(e)}>
                <input
                    type="text"
                    id="search"
                    placeholder="Search for a country..."
                    value={searchInput}
                    onChange={(e) => onSearchChange(e)}
                    className={error !== null ? "error" : null}
                />
                <label htmlFor="search"><SearchIcon/></label>
            </form>
            {(error !== null) && <p className="error">Something went wrong! try Again...</p>}
        </StyledSearchInput>
    )
}

export default Search
