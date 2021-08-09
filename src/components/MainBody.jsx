import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { StyledMainBody } from '../styles/mainBody.style';
import Pagination from './Pagination';

const MainBody = ({ 
    countries, 
    loading,
    error, 
    pages, 
    pageDisplay,
    minPageNumberLimit,
    maxPageNumberLimit,
    onPageSelect, 
    currentPage,
    onPrevSelect,
    onNextSelect
}) => {
    return (
        <StyledMainBody>
            {
                !error && (loading ?
                <Loader/> :
                (
                    <div className="container">
                        {
                            countries.map(country => (
                                <div className="country" key={country.name}>
                                    <div className="top">
                                        <Link to={`/countries/${country.alpha3Code}`}>
                                            <img src={country.flag} alt="country flag" /></Link>
                                    </div>
                                    <div className="details">
                                        <h2>{country.name}</h2>
                                        <p>Population: {country.population}</p>
                                        <p>Region: {country.region}</p>
                                        <p>Capital: {country.capital}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <Pagination
                            pages={pages}
                            pageDisplay={pageDisplay}
                            onPageSelect={onPageSelect}
                            currentPage={currentPage}
                            minPageNumberLimit={minPageNumberLimit}
                            maxPageNumberLimit={maxPageNumberLimit}
                            onPrevSelect={onPrevSelect}
                            onNextSelect={onNextSelect}
                        />
                    </div>)
                )
            }
        </StyledMainBody>
    )
}

export default MainBody
