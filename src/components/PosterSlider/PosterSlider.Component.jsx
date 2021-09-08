import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const { posters, title, subtitle, isDark, config } = props;

    const currentSettings = config ? config : settings;

    return (
        <>
            <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
                <h3
                    className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-black"
                    }`}
                >
                    {title}
                </h3>
                <p
                    className={`text-sm  ${
                        isDark ? "text-white" : "text-gray-800"
                    }`}
                >
                    {subtitle}
                </p>
            </div>
            <Slider {...currentSettings}>
                {posters.map((each) => (
                    <Poster {...each} isDark={isDark} />
                ))}
                {console.log(posters)}
            </Slider>
        </>
    );
};

export default PosterSlider;
