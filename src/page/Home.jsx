import React, { Component } from 'react';
import { SearchForm } from "../components/SearchForm";
import { Title } from '../components/Title'
import { MoviesList } from "../components/MoviesList";
// importante recordar que si pongo export defaul class no se puede pasar con { } en el componente que lo utilizo   
export  class Home extends Component {
    state = { usedSearch: false, results: [] }

    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
    }
    _renderResults() {
        return this.state.results.length === 0
            ? <p>sorry! Results not found </p>
            : <MoviesList movies={this.state.results} />

    }
    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {this.state.usedSearch ? this._renderResults()
                    : <small>use the form to search a movie</small>}

            </div>
        )
    }
}
