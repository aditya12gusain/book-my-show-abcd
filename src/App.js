import React from "react";
import DefaultHOC from "./HOC/Default.HOC";

function HomePage() {
    return <h1>THis is Home page</h1>;
}

function Component() {
    return <h1>THis is Contact page</h1>;
}

function App() {
    return (
        <>
            <DefaultHOC path="/" exact component={HomePage} />
            <DefaultHOC path="/contact" exact component={Component} />
        </>
    );
}
export default App;
