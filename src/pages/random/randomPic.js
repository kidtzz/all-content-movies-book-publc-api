import axios from "axios";
import React, { useState } from "react";

function RandomPic() {
    const linkimg =
        "https://www.clipartmax.com/png/full/293-2932016_monocle-top-hat-png-image-tanda-tanya-hitam-putih.png";

    const [img, setImg] = useState();
    const [inputImg, setInputImg] = useState();
    const [name, setName] = useState();

    const handleButton = async () => {
        setInputImg("");
        getImg();
        setName(inputImg);
    };

    const getImg = async () => {
        try {
            const data = await axios.get(`https://robohash.org/${inputImg}`);
            setImg(data.config.url);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container">
                <div className="row d-block">
                    <div className="col-lg-6">
                        <h1>this app RandomPic</h1>
                        <input
                            type="text"
                            value={inputImg || ""}
                            onChange={(e) => setInputImg(e.target.value)}
                        />
                        <button onClick={handleButton}>click</button>
                    </div>
                    <div className="col-lg-6">
                        <br />
                        <h5 >hi {name}</h5>
                        <img
                            className="img-fluid"
                            src={img ? img : linkimg}
                            height="300"
                            width="300"
                            alt="random-pic"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RandomPic;
