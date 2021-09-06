import React from "react";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Higher Order Components
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import Plays from "./pages/Plays.Page";

function App() {
    return (
        <>
            <DefaultHOC path="/" exact component={HomePage} />
            <MovieHOC path="/movie/:id" exact component={MoviePage} />
            <DefaultHOC path="/plays" exact component={Plays} />
        </>
    );
}
export default App;
