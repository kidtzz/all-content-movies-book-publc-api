import React from "react";

const STYLE = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
];

const SIZE = ["btn--small", "btn--large"];
const ButtonCus = ({ children, onClick, type, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLE.includes(buttonStyle)
        ? buttonStyle
        : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonStyle : SIZE[0];
    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default ButtonCus;
