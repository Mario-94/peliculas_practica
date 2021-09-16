import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome'
///key f4e59a15
const API_KEY = 'f4e59a15'
export class Detail extends Component {
    static propTypes = {
        // id: PropTypes.string en este caso ya no llega el valor por props sino que por la URL entonces utilizamos la siguiente forma
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }//en esta parte se guardara toda la informacion que tenemos de
    _fetchMovies({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({ movie });
                this.setState({ movie }); //importante siempre se debe actualizar el estado por que sino no apareceran pintados en el navegador
            })
    }
    _goBack() {
        window.history.back()
    }
    componentDidMount() {
        // const { id } = this.props esto se cambia por lo siguiente
        //vamos a checar todas las props que nos llegan
        console.log(this.props);
        const { movieId } = this.props.match.params
        this._fetchMovies({ id: movieId })//de esta manera id:movieId le asignamos el valor de movieId a id
    }
    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div>
                <ButtonBackToHome />
                <h1>{Title}</h1>
                <img src={Poster} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}
