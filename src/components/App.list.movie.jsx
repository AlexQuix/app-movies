import React, {Component} from "react";


// COMPONETS
import Movie from "./movie";

class ListMovies extends Component{
    render(){
        const {dataMovies} = this.props;
        return (
            <section id="list-movies">
                <h1 id="total-result">Resultados: {(dataMovies.results[0])?dataMovies.total_results:"0"}</h1>
                {
                    (dataMovies.results[0])?
                        dataMovies.results.map(movie=><Movie movie={movie}/>)
                    :undefined
                }
            </section>
        )
    }
}

export default ListMovies;