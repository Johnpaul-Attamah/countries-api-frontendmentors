import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BackArrow } from '../images/vectors/Sprite';
import { StyledCountryDetails } from '../styles/details.style';
import { StyledMainButton } from '../styles/button.style';

const Details = ({ match, history }) => {
    const [countryDetails, setCountryDetails] = useState([]);
    const [names, setNames] = useState([]);
    const [error, setError] = useState(null);

    const BASE_URI = 'https://restcountries.eu/rest/v2';

    let uri = `${BASE_URI}/alpha?codes=${match.params.name}`;

    useEffect(() => {

        const handleCountryDetails = async() => {
            try {
              const { data } = await axios.get(uri);
              if(data){
                setCountryDetails(data)

                let borders = data[0].borders;
                
                let countryNames = [];
                for await (let country of borders) {
                    let uri = `${BASE_URI}/alpha?codes=${country}`;
                    const {data}  = await axios.get(uri);

                    if(data) {
                        countryNames.push(data[0].name);
                    }
                }
                setNames(countryNames);
              }
            } catch (error) {
              setError(error);
            }
        } 
        handleCountryDetails();
    },[uri])

    const borders = countryDetails[0]?.borders;

    const handleBack = () => {
        history.push('/');
        window.location.reload();
    }
    
    return (
        <StyledCountryDetails>
                <StyledMainButton>
                    <Link to="/" onClick={handleBack}><BackArrow/> <span>Back</span></Link>
                </StyledMainButton>
                    { !error && (<div className="container">
                        <div className="flag">
                            <img src={countryDetails[0]?.flag} alt={`${countryDetails[0]?.name} flag`} />
                        </div>
                        <div className="details">
                            <h2>{countryDetails[0]?.name}</h2>
                            <div className="info">
                                <div className="top">
                                    <p>Native Name: {countryDetails[0]?.nativeName}</p>
                                    <p>Population: {
                                    (countryDetails[0]?.population)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                    }</p>
                                    <p>Region: {countryDetails[0]?.region}</p>
                                    <p>Sub Region: {countryDetails[0]?.subregion}</p>
                                    <p>Capital: {countryDetails[0]?.capital}</p>
                                </div>
                                <div className="middle">
                                    <p>
                                        Top Level Domain: {
                                            (countryDetails[0]?.topLevelDomain)?.map(td => 
                                                <span key={td}>{td}</span>
                                                )
                                        }</p>
                                    <p>
                                        Currencies: {
                                            (countryDetails[0]?.currencies)?.map(c =>
                                                <span key={c.name}>{c.code}</span>    
                                            )
                                        }
                                    </p>
                                    <p>
                                        languages: {
                                            (countryDetails[0]?.languages)?.map(lg => 
                                                <span key={lg.name}>{lg.name}</span>
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="bottom">
                                <p>Border countries:</p>

                                    {
                                        names.map((country, index) =>
                                        (<StyledMainButton key={country}>
                                            <Link to={`/countries/${borders[index]}`}>{country}</Link>
                                        </StyledMainButton>))
                                    }
                            </div>
                        </div>
                    </div>)}
        </StyledCountryDetails>
    )
}

export default Details
