import React from "react";
import HeroCarousal from "../components/HeroCarousel/HeroCarousel.Component";
import Navbar from "../components/Navbar/Navbar.Component";

const DefaultLayout = (props) => {
    return (
        <div>
            <Navbar />
            <HeroCarousal />
            {props.children}
            <div>Footer</div>
        </div>
    );
};

export default DefaultLayout;
