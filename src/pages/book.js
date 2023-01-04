import axios from "axios";
import React from "react";

function Book() {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", "English is hard, but detectably so");

    const options = {
        method: "POST",
        url: "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "application/gzip",
            "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
            "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
        data: encodedParams,
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
    return <div>Book</div>;
}

export default Book;
