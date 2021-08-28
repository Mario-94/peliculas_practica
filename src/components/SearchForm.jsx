import React, { Component } from 'react'
///key f4e59a15
const API_KEY = 'f4e59a15'
export class SearchForm extends Component {
    state = {
        inpuntMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inpuntMovie: e.target.value })
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        const { inpuntMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inpuntMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search, totalResults } = results
                this.props.onResults(Search)
            })
    }
    render() {
        return (
            <form onSubmit={this._handleSubmit} >

                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            onChange={this._handleChange}
                            placeholder="Movie to search..." />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

