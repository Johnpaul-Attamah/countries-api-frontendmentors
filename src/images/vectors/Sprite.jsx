import React from 'react';
import sprite from '../sprite.svg';

export const Moon = () =>  (
        <svg className="light-mode">
            <use xlinkHref={sprite + "#icon-moon"}/>
        </svg>
    );

export const Sun = () => (
    <svg className="darkMode">
        <use xlinkHref={sprite + "#icon-sun"}/>
    </svg>
);

export const SearchIcon = () => (
    <svg className="search">
        <use xlinkHref={sprite + "#icon-magnifying-glass"}/>
    </svg>
);

export const DropDownArrow = ({ onToggleFilter }) => (
    <svg className="dropDown" onClick={onToggleFilter}>
        <use xlinkHref={sprite + "#icon-chevron-down"}/>
    </svg>
)

export const Previous = () => (
    <svg className="prevArr">
        <use xlinkHref={sprite + "#icon-chevron-left"}/>
    </svg>
);

export const Next = () => (
    <svg className="nextArr">
        <use xlinkHref={sprite + "#icon-chevron-right"}/>
    </svg>
);

export const BackArrow = () => (
    <svg className="backArr">
        <use xlinkHref={sprite + "#icon-arrow-long-left"}/>
    </svg>
);
