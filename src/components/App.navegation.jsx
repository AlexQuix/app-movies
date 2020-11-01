import React, {Component} from "react";

class Navegation extends Component{
    state = {
        data: ""
    }
    handleInput(e){
        this.setState({
            data: e.target.value
        })
    }
    render(){
        return (
            <div id="navegation">
                <header>App Movie</header>
                <input 
                    type="text" 
                    id="seact"
                    placeholder="Search Movie"
                    onInput={this.handleInput.bind(this)}
                />
                <div>
                    <h1>Output</h1>
                    {this.state.data}
                </div>
            </div>
        )
    }
}

export default Navegation;