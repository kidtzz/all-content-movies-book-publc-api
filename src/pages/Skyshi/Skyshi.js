import React from "react";
import Controls from "../../components";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

function Skyshi() {
    const [dataG, setDataG] = useState();
    const getData = async () => {
        try {
            const data = await axios.get(
                "https://todo.api.devcode.gethired.id/activity-groups/"
            );
            setDataG(data.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    useState(() => {
        getData();
    }, []);

    const currentDate = new Date();
    // const options = {
    //     day: "numeric",
    //     month: "short",
    //     year: "numeric",
    // };
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    console.log("mon?", monthNames[currentDate.getMonth()]);
    console.log("day", monthNames[currentDate.getDay()]);

    // console.log(currentDate.toLocaleDateString("id-ID", options));

    // console.log("date?", dataG?.created_at);

    return (
        <>
            <div className="container my-5">
                <div className="d-flex justify-content-between">
                    <div className="title">
                        <h2>Activity</h2>
                    </div>
                    <div className="button-tambah">
                        <Controls.ButtonCus>Tambah</Controls.ButtonCus>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        {dataG?.map((item, index) => {
                            return (
                                <div className="col-lg-3 mb-4" key={index}>
                                    <div className="card  p-3 text-dark">
                                        <div className="card-title">
                                            <h5>{item.title}</h5>
                                        </div>
                                        <div className="card-body"></div>
                                        <div className="card-bawah d-flex">
                                            <div className="date mx-1">
                                                <p>{item.created_at}</p>
                                            </div>
                                            <div className="card-body"></div>
                                            <div className="icon-button mx-1">
                                                <a href="/#">
                                                    <FaRegTrashAlt />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skyshi;
