import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import leftArrow from '../../assets/left-arrow.svg';

const Details = props => {

    return (
        <div>
            <Link to="/" className="back-button" id="btn"> <img src={leftArrow} /> Back </Link>

            {props.country.map((c, index) => {
                return (
                    <div className="details-container" id="details-container" key={index}>
                        <img src={c.flag} />

                        <div className="details-info">
                            <h1 id="label">{c.name}</h1>

                            <div className="list-features">
                                <ul>
                                    <li id="label"><b>Native Name: </b> {c.nativeName}</li>
                                    <li id="label"><b>Population: </b> {c.population}</li>
                                    <li id="label"><b>Region: </b> {c.region}</li>
                                    <li id="label"><b>Sub Region: </b> {c.subregion}</li>
                                    <li id="label"><b>Capital: </b> {c.capital}</li>
                                </ul>

                                <ul>
                                    <li id="label">Top Level Domain: {c.topLevelDomain}</li>
                                    <li id="label"> Currencies: {c.currencies.map(curr => curr.name)}  </li>
                                    <li id="label"> Languages: {c.languages.map(lang => lang.name)}  </li>
                                </ul>
                            </div>

                            <div className="border-container">
                                <h4 id="label" >Border Countries:</h4>
                                <ul>
                                    <li id="btn" className="border-countries">France</li>
                                    <li id="btn" className="border-countries">Germany</li>
                                    <li id="btn" className="border-countries">Netherlands</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })
            }
        </div>
    )
};

export default Details;