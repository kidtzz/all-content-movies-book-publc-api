import axios from "axios";
import React, { useEffect, useState } from "react";

function Heroku() {
    const [quotes, setQuotes] = useState();
    const getQuotes = async () => {
        try {
            const data = await axios.get(
                "https://the-dune-api.herokuapp.com/quotes/3"
            );
            setQuotes(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getQuotes();
    }, []);
    return (
        <>
            <div className="hero-keren">
                <div
                    id="carouselExampleFade"
                    className=" carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://images4.alphacoders.com/101/1010068.png"
                                className="d-block w-100"
                                alt="..."
                            />
                            {quotes?.map((item, index) => {
                                return (
                                    <div
                                        className="carousel-caption d-none d-md-block"
                                        key={index}
                                    >
                                        <p>{item.quote}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Heroku;
