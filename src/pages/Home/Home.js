import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

class Home extends Component {

    state = {
        countries: [],
        loading: true,
        error: '',
    }

    async componentDidMount() {
        try {
            const response = await api.get(`/all`);
            this.setState({ countries: response.data, loading: false });
        } catch (error) {
            this.setState({ error, loading: false });
        }
    }

    searchCountry = async (e) => {
        const value = e.target.value;
        try {
            const response = await api.get(`/name/${value}`);
            this.setState({ countries: response.data, loading: false });
        } catch (error) {
            this.setState({ error, loading: false });
        }
    };

    searchByRegion = async (e) => {
        const value = e.target.value;

        try {
            const response = await api.get(`/region/${value}`);
            this.setState({ countries: response.data, loading: false });
        } catch (error) {
            this.setState({ error, loading: false });
        }
    };

    renderCountries = countries => {
        return countries.map((country, index) => {
            return (
                <div className="home-container" key={index}>
                    <div className="card-countries">
                        <Link to={`/Details/${country.name}`} >
                            <img src={country.flag} />
                        </Link>
                        <h2 id="label">{country.name}</h2>
                        <h4 id="label">Population: {country.population}</h4>
                        <h4 id="label">Region: {country.region}</h4>
                        <h4 id="label">Capital: {country.capital}</h4>
                    </div>
                </div>
            )
        })
    };

    render() {
        const { countries, loading, error } = this.state;

        if (loading)
            return <h5>Carregando...</h5>

        return (
            <div id="home-container">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Search for a country"
                        className="input-countries"
                        onChange={(e) => this.searchCountry(e)}
                    />

                    <select value={countries} onChange={this.searchByRegion} className="select-countries">
                        <option value="africa">Africa</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>

                <div className="countries-container" >
                    {this.renderCountries(countries)}
                </div>
            </div>
        );
    };
};

export default Home;