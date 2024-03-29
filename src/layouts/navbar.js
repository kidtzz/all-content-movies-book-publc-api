import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar-keren">
                <nav className="navbar navbar-expand-lg bg-custom ">
                    <div className="container ">
                        <a className="navbar-brand" href="/">
                            Navbar
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-md-center"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " to="/">
                                        Movies
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/Book">
                                        Book
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/Quran">
                                        Quran
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/random">
                                        random content
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/Skyshi">
                                        Skyshi
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/Trycatch">
                                        Trycatch
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
