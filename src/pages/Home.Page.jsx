import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

function HomePage() {
    return (
        <>
            <HeroCarousel />

            <div className="container mx-auto px-12 md:px-4 my-8">
                <h1 className="text-2xl font-bold text-gray-800 my-3">
                    The best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>

            <div className="container mx-auto px-12 md:px-4 my-8">
                <PosterSlider />
            </div>
        </>
    );
}
export default HomePage;
