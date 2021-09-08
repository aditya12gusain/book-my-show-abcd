import React, { useState, useContext } from "react";
import MovieInfo from "./MovieInfo.Component";

//context
import { MovieContext } from "../../context/Movie.context";

const MovieHero = () => {
    // const [movie] = useState({
    //     id: "asfasdf",
    //     original_title: "Fast and Furious 9",
    //     overview:
    //         "2h 23m • Action , Adventure , Crime , Thriller • UA • 2 Sep, 2021",
    //     backdrop_path:
    //         "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg",
    //     poster_path:
    //         "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg",
    // });

    const { movie } = useContext(MovieContext);

    const genres = movie.genres?.map(({ name }) => name).join(", ");

    return (
        <>
            <div>
                {/* mobile & tab sized devices */}
                <div className="lg:hidden w-full">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="cover poster"
                        className="m-4 rounded"
                        style={{
                            width: "calc(100% - 2rem)",
                        }}
                    />
                </div>
                <div className="flex flex-col gap-3 lg:hidden">
                    <div className="flex flex-col-reverse gap-3 px-4 my-3">
                        <div className="text-black flex flex-col gap-2 md:px-4">
                            <h4>4k ratings</h4>
                            <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
                            <h4>
                                {movie.runtime} min • {genres}{" "}
                            </h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Rent ₹149
                        </button>
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Buy ₹599
                        </button>
                    </div>
                </div>

                {/* Large Screen Devices */}
                <div
                    className="relative hidden w-full lg:block"
                    style={{ height: "30rem" }}
                >
                    <div
                        className="absolute z-10 w-full h-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
                        }}
                    ></div>

                    <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                        <div className="w-64 h-96">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt="Movie Poster"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                        <div>
                            <MovieInfo movie={movie} />
                        </div>
                    </div>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt="backdrop poster"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    );
};

export default MovieHero;
