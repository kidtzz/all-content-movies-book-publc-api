import React from "react";

function Trycatch() {
    return (
        <>
            <div className="container d-block">
                <h1>select</h1>
                <div className="dropdown">
                    <a
                        className="btn btn-secondary"
                        href="/#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown link
                    </a>

                    <ul className="dropdown-menu ">
                        <li>
                            <div className="dropdown-item d-flex align-items-center ">
                                <span className="label-indicator mx-2 very-high"></span>
                                <span>Action</span>
                            </div>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/#">
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
                <p>Set value</p>
            </div>
        </>
    );
}

export default Trycatch;
