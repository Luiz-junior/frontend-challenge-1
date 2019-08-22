import React, { Component } from 'react';

import api from '../services/api';
import Details from '../components/Details/Details';

class DetailsPage extends Component {

    state ={
        country: [],
        loading: true,
        error: '',
    };

    async componentDidMount() {
        const { id: param } = this.props.match.params;
        try {
            const response = await api.get(`/name/${param}`);    
            this.setState({ country: response.data, loading: false });
        } catch (error) {
            this.setState({ error, loading: false });
        }
        
    };

    render() {
        const { country, loading } = this.state;
        if(loading)
            return <h3>Carregando...</h3>

        return (    
            <Details country={country} />
        );
    }
};

export default DetailsPage;