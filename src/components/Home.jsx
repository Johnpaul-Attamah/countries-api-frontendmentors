import React, { Fragment } from 'react';
import styled from 'styled-components';
import Search from './Search';
import FilterBox from './FilterBox';
import MainBody from './MainBody';

const SearchNav = styled.div`
    @media screen and (min-width: 1000px) {
        width: 85%;
        margin: 5rem auto;
        display: flex;
        justify-content: space-between;
    }
`;

const Home = ({ 
    loading, 
    countries, 
    region, 
    onRegionSelect,
    pages,
    currentPage,
    pageDisplay,
    minPageNumberLimit,
    maxPageNumberLimit,
    searchInput,
    error,
    onPrevSelect,
    onNextSelect,
    onPageSelect,
    onSearchChange,
    onSearchSubmit
}) => {

    return (
        <Fragment>
            <SearchNav>
            <Search
                error={error}
                searchInput={searchInput}
                onSearchChange={onSearchChange}
                onSearchSubmit={onSearchSubmit}
            />

            <FilterBox
            region={region}
            onRegionSelect={onRegionSelect}
            />
            </SearchNav>
            
          <MainBody
            countries={countries}
            error={error}
            loading={loading}
            pages={pages}
            pageDisplay={pageDisplay}
            currentPage={currentPage}
            minPageNumberLimit={minPageNumberLimit}
            maxPageNumberLimit={maxPageNumberLimit}
            onPrevSelect={onPrevSelect}
            onNextSelect={onNextSelect}
            onPageSelect={onPageSelect}
          />
        </Fragment>
    )
}

export default Home
