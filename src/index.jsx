import React from "react";
import ReactDOM from "react-dom";


// STYLES
import "./style/App.css";
import "./style/navegation.css";
import "./style/movies.css";


// PAGES
import Movie from "./pages/Page.movie";


let container = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Movie/>
    </React.StrictMode>,
    container
)