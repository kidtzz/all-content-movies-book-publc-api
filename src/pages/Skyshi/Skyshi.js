import React, { useEffect } from "react";
import Controls from "../../components";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteSky, getIdSky, getSky } from "../../redux/action/actionSky";
import { ModalAdd, ModalDelete } from "../../components/modal";
import { useState } from "react";

function Skyshi() {
    const {
        getListSkyResult,
        getListSkyLoading,
        getListSkyError,
        deleteSkyResult,
    } = useSelector((state) => state.reducerSky);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSky());
    }, [dispatch]);

    const navigate = useNavigate();
    const detailSky = (dataQ) => {
        navigate(`/DetailSky/${dataQ.title.replace(/ /g, "-")}`);
        dispatch(getIdSky(dataQ));
    };

    const [idDel, setIDDelete] = useState();

    const handleDetele = () => {
        dispatch(deleteSky(idDel.id));
    };

    useEffect(() => {
        if (deleteSkyResult) {
            dispatch(getSky());
        }
    }, [deleteSkyResult, dispatch]);

    return (
        <>
            <div className="container my-5">
                <div className="d-flex justify-content-between">
                    <div className="title">
                        <h2>Activity</h2>
                    </div>
                    <div
                        className="button-tambah btn-add"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalAdd"
                    >
                        <Controls.ButtonCus>Tambah</Controls.ButtonCus>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        {getListSkyResult ? (
                            <>
                                {getListSkyResult.data?.map((item, index) => {
                                    const dateG = item.created_at;
                                    const myDate = new Date(dateG);
                                    const day = myDate.getDate();

                                    const month = myDate.getMonth();
                                    const year = myDate.getFullYear();
                                    const monthNames = [
                                        "Januari",
                                        "Febuari",
                                        "Maret",
                                        "April",
                                        "Mei",
                                        "Juni",
                                        "Juli",
                                        "Agustus",
                                        "September",
                                        "Oktober",
                                        "November",
                                        "Desember",
                                    ];

                                    const resultDate =
                                        ("0" + day).slice(-2) +
                                        " " +
                                        monthNames[month] +
                                        " " +
                                        year;

                                    return (
                                        <div
                                            className="col-lg-3 col-md-4 mb-4"
                                            key={index}
                                        >
                                            <div className="card  p-3 text-dark">
                                                <p>{item.id}</p>
                                                <div className="card-title">
                                                    <h5
                                                        href=" "
                                                        className="cur-pointer text-dark text-decoration-none"
                                                        onClick={() =>
                                                            detailSky(item)
                                                        }
                                                    >
                                                        {item.title}
                                                    </h5>
                                                </div>
                                                <div className="card-body"></div>
                                                <div className="card-bawah d-flex">
                                                    <div className="date mx-1">
                                                        <p>{resultDate}</p>
                                                    </div>
                                                    <div className="card-body"></div>
                                                    <div className="icon-button mx-1">
                                                        <i
                                                            className="cur-pointer "
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                            onClick={() =>
                                                                setIDDelete(
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            <FaRegTrashAlt />
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        ) : getListSkyLoading ? (
                            <p> Loading Data ...</p>
                        ) : (
                            <p>
                                {getListSkyError
                                    ? getListSkyLoading
                                    : "data Loading..."}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <ModalDelete
                exampleModal="exampleModal"
                onConfirm={handleDetele}
                modalTitle={<>Delete Data</>}
                modalBody={<>Yakin Mau delete?</>}
                btnColor={"btn-danger"}
            />
            <ModalAdd
                exampleModal="ModalAdd"
                modalTitle={<>Tambah Activity</>}
            />
        </>
    );
}

export default Skyshi;
