import React from "react";
import ReactDOM from "react-dom";


// COMPONETS
import Navegation from "./components/App.navegation";


let container = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <Navegation/>
    </React.StrictMode>,
    container
)