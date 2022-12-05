import axios from "axios";
import React, { useEffect, useState } from "react";

// const linkApi = "https://blockchain.info/tobtc?currency=TWD&value=2";
function BlockChain() {
    const [valBtc, setValBtc] = useState();
    const [showD, setShowD] = useState();

    const [btc, setBtc] = useState();
    const [sym, setSym] = useState();

    const [activeTab, setActiveTab] = useState("tab1");

    const handleBTCToday = () => {
        setActiveTab("tab1");
    };
    const handleToBTC = () => {
        setActiveTab(`tab2`);
    };

    const handleToRP = () => {
        setActiveTab(`tab3`);
    };

    const getBTC = async () => {
        try {
            const btc = await axios.get("https://blockchain.info/ticker");
            setBtc(btc.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getBTC();
    }, []);

    const change = async () => {
        try {
            const aha = await axios.get(
                `https://blockchain.info/tobtc?currency=${sym}&value=${valBtc}`
            );
            setShowD(aha.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        change();
    });

    // console.log("dadt", sym);
    // console.log("valBtc", valBtc);
    // console.log("showD:", showD);

    return (
        <>
            <div className="container">
                <h2>BlockChain</h2>
                <div className="d-flex border">
                    <button
                        className={activeTab === "tab1" ? "active" : ""}
                        onClick={handleBTCToday}
                    >
                        handleBTCToday
                    </button>
                    <button
                        className={activeTab === "tab1" ? "active" : ""}
                        onClick={handleToBTC}
                    >
                        handleToBTC
                    </button>
                    <button
                        className={activeTab === "tab1" ? "active" : ""}
                        onClick={handleToRP}
                    >
                        handleToRP
                    </button>
                </div>
                <div className="row">
                    {activeTab === "tab1" ? (
                        <>
                            <div className="col-lg container   ">
                                <h1>handleBTCToday</h1>
                                <table className="table bg-white">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">15m</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Buy</th>
                                            <th scope="col">Sell</th>
                                            <th scope="col">Symbol</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="col">1</th>
                                            <th scope="col">{btc?.ARS.buy}</th>
                                            <th scope="col">{btc?.ARS.buy}</th>
                                            <th scope="col">{btc?.ARS.last}</th>
                                            <th scope="col">{btc?.ARS.sell}</th>
                                            <th scope="col">
                                                {btc?.ARS.symbol}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th scope="col">2</th>
                                            <th scope="col">{btc?.AUD.buy}</th>
                                            <th scope="col">{btc?.AUD.buy}</th>
                                            <th scope="col">{btc?.AUD.last}</th>
                                            <th scope="col">{btc?.AUD.sell}</th>
                                            <th scope="col">
                                                {btc?.AUD.symbol}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th scope="col">3</th>
                                            <th scope="col">{btc?.JPY.buy}</th>
                                            <th scope="col">{btc?.JPY.buy}</th>
                                            <th scope="col">{btc?.JPY.last}</th>
                                            <th scope="col">{btc?.JPY.sell}</th>
                                            <th scope="col">
                                                {btc?.JPY.symbol}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th scope="col">4</th>
                                            <th scope="col">{btc?.USD.buy}</th>
                                            <th scope="col">{btc?.USD.buy}</th>
                                            <th scope="col">{btc?.USD.last}</th>
                                            <th scope="col">{btc?.USD.sell}</th>
                                            <th scope="col">
                                                {btc?.USD.symbol}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th scope="col">5</th>
                                            <th scope="col">{btc?.SGD.buy}</th>
                                            <th scope="col">{btc?.SGD.buy}</th>
                                            <th scope="col">{btc?.SGD.last}</th>
                                            <th scope="col">{btc?.SGD.sell}</th>
                                            <th scope="col">
                                                {btc?.SGD.symbol}
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : activeTab === "tab2" ? (
                        <>
                            <div className="col-lg container ">
                                <h3>handleToBTC</h3>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => setSym(e.target.value)}
                                >
                                    <option value="USD">USD</option>
                                    <option value="JPY">JPY</option>
                                    <option value="UAD">UAD</option>
                                    <option value="CAD">CAD</option>
                                    <option value="CNY">CNY</option>
                                </select>
                                <br />
                                <input
                                    // value={valBtc}
                                    onChange={(e) => setValBtc(e.target.value)}
                                />
                                <h1>{showD}</h1>
                            </div>
                        </>
                    ) : activeTab === "tab3" ? (
                        <>
                            <div className="col-lg container ">
                                <h4> handleToRP</h4>
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

export default BlockChain;
