import React from 'react';
import { Previous, Next } from '../images/vectors/Sprite';
import { StyledPagination } from '../styles/pagination.style';


const Pagination = ({ 
    pages, 
    pageDisplay,
    onPageSelect, 
    currentPage, 
    minPageNumberLimit,
    maxPageNumberLimit,
    onPrevSelect,
    onNextSelect 
}) => {

    const PageNumbers = pages.map(number => {
        if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li 
                    key={number} 
                    id={number} 
                    onClick={onPageSelect}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            )
        } else {
            return null;
        }
    })

    let pageIncrementBtn = null;
    if(pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={onNextSelect}>&hellip;</li>
    }

    let pageDecrementBtn = null;
    if(minPageNumberLimit >=1) {
        pageDecrementBtn = <li onClick={onPrevSelect}>&hellip;</li>
    }
    return (
        <StyledPagination>
            <ul className={!pageDisplay ? "deactivate" : null}>
                <li className="buttons">
                    <button 
                        onClick={onPrevSelect}
                        disabled={currentPage === pages[0]}
                    >
                        <Previous/></button>
                </li>
                {pageDecrementBtn}
                {PageNumbers}
                {pageIncrementBtn}
                <li className="buttons">
                    <button 
                        onClick={onNextSelect}
                        disabled={currentPage === pages[pages.length - 1]}
                    ><Next/></button>
                </li>
            </ul>
        </StyledPagination>
    )
}

export default Pagination
