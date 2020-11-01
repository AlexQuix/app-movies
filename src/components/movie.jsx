import React, {Component} from "react";


class Movie extends Component{
    render(){
        const {movie} = this.props;
        return (
            <div key={movie.id} data-id={movie.id} className="cont-movie">
                <h1>{movie.title}</h1>
                <img 
                    src={
                        (movie.poster_path)?
                            `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
                        :"https://image.freepik.com/vector-gratis/fondo-pagina-error-404-distorsion_23-2148086227.jpg"
                    }
                />
            </div>
        )
    }
}

export default Movie;