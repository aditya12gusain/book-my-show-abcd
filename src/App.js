import React from "react";
import DefaultHOC from "./HOC/Default.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/Home.Page";

function App() {
    return (
        <>
            <DefaultHOC path="/" exact component={HomePage} />
        </>
    );
}
export default App;
