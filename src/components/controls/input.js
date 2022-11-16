import React from "react";

const STYLE = [
    "input--primary--solid",
    "input--secondary--solid",
    "input--primary--solid",
    "input--secondary--solid",
    "input--primary--solid",
    "input--secondary--solid",
];
const SIZE = ["input--small", "input--larger"];
const inputCus = ({ value, onChange, inputStyle, inputSize }) => {
    const CheckInputStyle = STYLE.includes(inputStyle) ? inputStyle : STYLE[0];
    const checkInputSize = STYLE.includes(inputSize) ? inputSize : SIZE[0];
    return (
        <input
            onChange={onChange}
            value={value}
            className={`form-input ${CheckInputStyle} ${checkInputSize}`}
        ></input>
    );
};
export default inputCus;
