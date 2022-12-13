import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaAngleLeft, FaPencilAlt } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Controls from "../../components";
import { useNavigate } from "react-router-dom";
import { ModalAdd } from "../../components/modal";

function DetailActivity() {
    const [tit, setTitle] = useState();
    // const [edit, setEdit] = useState(false);
    const { getIdSkyResult } = useSelector((state) => state.reducerSky);

    useEffect(() => {
        if (getIdSkyResult) {
            setTitle(getIdSkyResult.title);
        }
    }, [getIdSkyResult]);

    const handleEdit = () => {
        // setEdit(true);
    };

    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/Skyshi");
    };

    return (
        <>
            <div className="container">
                <h2>test</h2>
                <div className="d-flex justify-content-between">
                    <div className="header-left d-flex">
                        <div className="btn-back align-items-center mx-1">
                            <FaAngleLeft onClick={handleBack} />
                        </div>

                        <div className="title-activity" contentEditable>
                            <h3>{tit}</h3>
                        </div>

                        <div className="btn-edit mx-2">
                            <FaPencilAlt
                                className="cus-pointer"
                                onClick={handleEdit}
                            />
                        </div>
                    </div>
                    <div className="header-right d-flex">
                        <div className="short-icon">
                            <BiSortAlt2 />
                        </div>
                        <div
                            className="btn-add"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalAdd"
                        >
                            <Controls.ButtonCus>
                                <AiOutlinePlus className="mx-2" />
                                Tambah
                            </Controls.ButtonCus>
                        </div>
                    </div>
                </div>
            </div>
            <ModalAdd exampleModal="ModalAdd" modalTitle={<>Tambah Todo</>} />
        </>
    );
}

export default DetailActivity;
