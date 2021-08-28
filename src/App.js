import { SearchForm } from "./components/SearchForm";
import { Title } from './components/Title'
import './App.css';
import 'bulma/css/bulma.css'
import { Component } from "react";

class App extends Component{
  state = { results: [] }

  _handleResults = (results) => {
    this.setState({ results })
  }
  _renderResults(){
    const {results}=this.state
    return results.map((movie)=>{
      return <p key={movie.imdbID}>{movie.Title}</p>
    })
  }

  render(){
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults}/>
        </div>
        {this.state.results.length ===0
        ? <p>Sin resultados..</p>
        : this._renderResults()
      }
      </div>
    );
  }

}

export default App;
