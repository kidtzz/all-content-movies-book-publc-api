import axios from "axios";
import React, { useEffect, useState } from "react";

function RandomJoke() {
    const linkApi = "https://official-joke-api.appspot.com/random_joke";
    const [data, setData] = useState();

    const getData = async () => {
        try {
            const isi = await axios.get(linkApi);
            setData(isi.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    const handleButton = () => {
        getData();
    };
    return (
        <>
            <div className="container">
                <h1>random_joke</h1>
                <div className="row">
                    {data ? (
                        <>
                            <div className="col-lg-6 ">
                                <div className="card ">
                                    <div className="card-content text-dark">
                                        <h5>{data.setup}</h5>
                                        <p>{data.punchline}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>loading ...</>
                    )}
                </div>
                <button onClick={handleButton}>Reload</button>
            </div>
        </>
    );
}

export default RandomJoke;
