import axios from "axios";
import React, { useEffect, useState } from "react";
import Controls from "../components";

function Movie() {
    const [movie, setMovie] = useState();
    const getMovie = async () => {
        try {
            const data = await axios.get(
                "https://ghibliapi.herokuapp.com/films/"
            );
            setMovie(data.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <>
            <div className="container">
                <div className="movie-keren">
                    <Controls.ButtonCus
                        type="button"
                        buttonStyle="btn--warning--solid"
                        onClick={() => console.log("test")}
                    >
                        CLick Me
                    </Controls.ButtonCus>
                    <div className="row">
                        {movie
                            ?.slice(1, 9)
                            .sort(function (a, b) {
                                return a - b;
                            })
                            .map((item, index) => {
                                return (
                                    <div className="col-lg-3 mb-4" key={index}>
                                        <div className="card p-1 card-keren ">
                                            <img
                                                src={item.image}
                                                width="50"
                                                height="50"
                                                className="card-img-top img-fluid"
                                                alt="..."
                                            />

                                            <div className="card-body text-white f-12 ">
                                                <h5 className="card-title">
                                                    {item.title}
                                                </h5>
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    {item.original_title}
                                                </h6>
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    {item.release_date} rate{" "}
                                                    {item.rt_score}
                                                </h6>
                                                <p className="card-text">
                                                    {item.description}
                                                </p>
                                                <a
                                                    href="/#"
                                                    className="card-link"
                                                >
                                                    Card link
                                                </a>
                                                <a
                                                    href="/#"
                                                    className="card-link"
                                                >
                                                    Another link
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movie;
