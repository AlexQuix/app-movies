import React, {Component} from "react";


class Navegation extends Component{
    async searchMovie(title){
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=36e9bc3df49bcf8ff1978a5075c591c1&language=en-US&query=${title}`);
        let json = await response.json();
        this.props.updateDate(json);
    }
    handleInput(e){
        let {value} = e.target;
        if(value){
            this.searchMovie(value);
        }
    }
    render(){
        return (
            <section id="navegation">
                <header><h1>App Movie</h1></header>
                <div id="search-movie">
                    <input 
                        type="text"
                        id="search"
                        placeholder="Search Movie"
                        onInput={this.handleInput.bind(this)}
                    />
                </div>
            </section>
        )
    }
}

export default Navegation;