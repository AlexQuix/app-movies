import React, {Component} from "react";


// COMPONENST
import Navegation from "../components/App.navegation";
import ListMovies from "../components/App.list.movie";


class PageMovie extends Component{
    state = {
        data: {
            results: []
        }
    }
    updateDate = (json)=>{
        this.setState({
            data: json
        });
    }
    render(){
        return (
            <section>
                <Navegation updateDate={this.updateDate}/>
                <ListMovies dataMovies={this.state.data}/>
            </section>
        )
    }
}

export default PageMovie;