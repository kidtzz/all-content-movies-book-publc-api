import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSky, getSky } from "../redux/action/actionSky";

export function ModalPop({ onConfirm, modalTitle, exampleModal, modalBody }) {
    return (
        <div className="container">
            <div
                className="modal fade"
                id={exampleModal}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title text-dark"
                                id="exampleModalLabel"
                            >
                                {modalTitle}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-dark">
                            <h6>{modalBody}</h6>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={onConfirm}
                            >
                                yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ModalAdd({ exampleModal, modalTitle }) {
    const { addSkyResult } = useSelector((state) => state.reducerSky);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [option, setOption] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addSky({
                title: title,
                option: option,
            })
        );
    };

    useEffect(() => {
        if (addSkyResult) {
            dispatch(getSky());
            setTitle("");
        }
    }, [dispatch, addSkyResult]);

    return (
        <div className="container">
            <div
                className="modal fade"
                id={exampleModal}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title text-dark"
                                id="exampleModalLabel"
                            >
                                {modalTitle}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-dark">
                            <div className="mb-3">
                                <label className="form-label">
                                    Email address
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <select
                                className="form-select form-select-md mb-3"
                                aria-label=".form-select-lg example"
                            >
                                <option selected>Very High</option>
                                <option value="1">High</option>
                                <option value="2">Medium</option>
                                <option value="3">Low</option>
                                <option value="3" className="d-flex">
                                    Very Low
                                </option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={handleSubmit}
                            >
                                yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
