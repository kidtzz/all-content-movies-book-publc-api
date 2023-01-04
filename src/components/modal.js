import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSky, addTodo, getSky, updateTodo } from "../redux/action/actionSky";

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
//Modal Activity
export function ModalAdd({ exampleModal, modalTitle }) {
    const { addSkyResult } = useSelector((state) => state.reducerSky);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addSky({
                title: title,
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
                                    Activity Group
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

//Modal Todo
//Datenya belum
//Optionnya masih Bug ini bro gj
export function ModalAddTodo({ exampleModal, modalTitle, idTodo }) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [idT, setIdt] = useState();
    const { getIdTodoResult } = useSelector((state) => state.reducerSky);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idT) {
            dispatch(
                updateTodo({
                    id: idT,
                    activity_group_id: idTodo,
                    title: title,
                    is_active: true,
                    priority: priority,

                    created_at: "2022-12-17T07:39:50.150Z",
                    updated_at: "2022-12-17T07:39:50.150Z",
                })
            );
            setTitle("");
            setPriority("");
            setIdt("");
        } else {
            dispatch(
                addTodo(idTodo, {
                    activity_group_id: idTodo,
                    title: title,
                    is_active: true,
                    priority: priority,
                })
            );
            setTitle("");
            setPriority("");
        }
    };

    useEffect(() => {
        if (getIdTodoResult) {
            setTitle(getIdTodoResult.title);
            setPriority(getIdTodoResult.priority);
            setIdt(getIdTodoResult.id);
        }
    }, [getIdTodoResult]);

    console.log("prior?", priority);

    const optionPrio = [
        {
            label: "Very High",
            value: "very-high",
        },
        {
            label: "High",
            value: "high",
        },
        {
            label: "Medium",
            value: "normal",
        },
        {
            label: "Low",
            value: "low",
        },
        {
            label: "Very Low",
            value: "very-low",
        },
    ];

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
                                    Todo Activity
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

                            <label className="form-label">Priority</label>

                            <div
                                className={
                                    priority
                                        ? `label-indicator mx-2 ${priority}`
                                        : priority
                                }
                            ></div>
                            <select
                                className="form-select form-select-md mb-3"
                                aria-label="form-select-lg example"
                                onChange={(e) => setPriority(e.target.value)}
                                value={priority}
                            >
                                {optionPrio?.map((opt) => {
                                    return (
                                        <option
                                            value={
                                                priority
                                                    ? opt.value
                                                    : priority
                                                    ? priority
                                                    : opt.value
                                            }
                                            key={opt.id}
                                        >
                                            <div className="d-flex">
                                                <div className="label ">
                                                    {opt.label}
                                                </div>
                                            </div>
                                        </option>
                                    );
                                })}
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

//Modal Delete
export function ModalDelete({
    exampleModal,
    modalTitle,
    handleSubmit,
    bodyContent,
}) {
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
                            {bodyContent}
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
                                className="btn btn-danger"
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

{
    /* <div className="dropdown">
                                <div
                                    className="btn border px-3 "
                                    data-bs-toggle="dropdown"
                                    onChange={(e) =>
                                        setPriority(e.target.value)
                                    }
                                    value={priority}
                                >
                                    ---Select---
                                </div>

                                <ul className="dropdown-menu px-2">
                                    {optionPrio.map((opt) => {
                                        return (
                                            <li
                                                value={
                                                    priority
                                                        ? opt.value
                                                        : priority
                                                        ? priority
                                                        : opt.value
                                                }
                                                key={opt.id}
                                                className="cur-pointer"
                                            >
                                                <div className="dropdown-item d-flex align-items-center ">
                                                    <span
                                                        className={
                                                            priority
                                                                ? `label-indicator mx-2 ${priority}`
                                                                : priority
                                                        }
                                                    ></span>
                                                    <span>{opt.label}</span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div> */
}
