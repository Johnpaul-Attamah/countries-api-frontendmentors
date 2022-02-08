import React, { useState } from 'react';
import { DropDownArrow } from '../images/vectors/Sprite';
import { StyledFilterBox } from '../styles/filterBox.style';

const FilterBox = ({ region, onRegionSelect }) => {
    

    const [toggleFilter, setToggleFilter] = useState(true);

    const handleFilterToggle = () => setToggleFilter(!toggleFilter);

    const regions = ["africa", "americas", "asia", "europe", "oceania"]

    const handleFilter = (region) => {
        onRegionSelect(region);
        setToggleFilter(true);
    }

    return (
        <StyledFilterBox>
            <div className="drop-down">
                <h2>Filter by Region</h2>
                <DropDownArrow onToggleFilter={handleFilterToggle}/>
            </div>
            {
                toggleFilter ? 
                 null   :
                 (
                <div className="regions">
                    {
                        regions.map(continent => (
                            <div 
                                key={continent}
                                className={region === continent ? "region active" : "region"}
                                onClick={() => handleFilter(continent)}
                            >
                                {continent}
                            </div>
                        ))
                    }
                </div>

                 )
            }
        </StyledFilterBox>
    )
}

export default FilterBox
