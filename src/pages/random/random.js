import React, { useState } from "react";
import BlockChain from "./BlockChain";
import RandomJoke from "./randomJoke";
import RandomPic from "./randomPic";

function Random() {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleRandomJoke = () => {
        setActiveTab("tab1");
    };
    const handleRandomPic = () => {
        setActiveTab(`tab2`);
    };

    const handleBlockChain = () => {
        setActiveTab(`tab3`);
    };

    return (
        <>
            <div className="container">
                <h1>All Random games</h1>
                <div className="d-flex border">
                    <button
                        className={activeTab === "tab1" ? "active" : ""}
                        onClick={handleRandomJoke}
                    >
                        Random joke
                    </button>
                    <button
                        className={activeTab === "tab1" ? "active" : ""}
                        onClick={handleRandomPic}
                    >
                        Random pic
                    </button>
                    <button
                        className={activeTab === "tab1" ? "active" : ""}
                        onClick={handleBlockChain}
                    >
                        BlockChain
                    </button>
                </div>
                <div className="row">
                    {activeTab === "tab1" ? (
                        <>
                            <div className="col-lg-8 container border">
                                <RandomJoke />
                            </div>
                        </>
                    ) : activeTab === "tab2" ? (
                        <>
                            <div className="col-lg-8 container border">
                                <RandomPic />
                            </div>
                        </>
                    ) : activeTab === "tab3" ? (
                        <>
                            <div className="col-lg-11 container  ">
                                <BlockChain />
                            </div>
                        </>
                    ) : (
                        <>
                            <p>Kosong ...</p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Random;
