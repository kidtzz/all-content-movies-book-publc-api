import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft, FaPencilAlt } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ModalAddTodo, ModalDelete } from "../../components/modal";
import { deleteTodo, getIdTodo, getTodo } from "../../redux/action/actionSky";
import { BsTrash } from "react-icons/bs";
import Controls from "../../components";

function DetailActivity() {
    const [tit, setTitle] = useState();
    const [idact, setIdAct] = useState();
    const {
        getIdSkyResult,
        getListTodoResult,
        getListTodoLoading,
        getListTodoError,
        addTodoResult,
        deleteTodoResult,
        updateTodoResult,
    } = useSelector((state) => state.reducerSky);
    const dispatch = useDispatch();

    //control Backk
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/Skyshi");
    };

    //get Activity-Group
    useEffect(() => {
        if (getIdSkyResult) {
            setTitle(getIdSkyResult.title);
            setIdAct(getIdSkyResult.id);
        }
    }, [getIdSkyResult]);
    console.log("id?", idact);

    //Get All Todo-Items ini tapi K
    useEffect(() => {
        dispatch(getTodo(idact));
    }, [dispatch, idact]);

    //Get When Add
    useEffect(() => {
        if (addTodoResult) {
            dispatch(getTodo(idact));
        }
    }, [dispatch, addTodoResult, idact]);

    //edit-todoo
    const handleEditTodo = (idT) => {
        dispatch(getIdTodo(idT));
    };
    useEffect(() => {
        if (updateTodoResult) {
            dispatch(getTodo(idact));
        }
    }, [dispatch, updateTodoResult, idact]);

    //Delete
    const [idTodo, setIdTodo] = useState();
    const handleDelete = () => {
        dispatch(deleteTodo(idTodo.id));
    };
    useEffect(() => {
        if (deleteTodoResult) {
            dispatch(getTodo(idact));
        }
    }, [dispatch, deleteTodoResult, idact]);

    const [boxCheck, setBoxCheck] = useState(false);
    const handleCheckBox = (item, e) => {
        console.log("id?", item.id);
        if (e.target.checked) {
            setBoxCheck(true);
        } else {
            setBoxCheck(false);
        }
    };

    return (
        <>
            <div className="container my-5">
                <div className="d-flex justify-content-between">
                    <div className="header-left d-flex">
                        <div className="btn-back align-items-center mx-1">
                            <FaAngleLeft onClick={handleBack} />
                        </div>

                        <div className="title-activity">
                            <h2>{tit}</h2>
                        </div>

                        <div className="btn-edit mx-2">
                            <FaPencilAlt className="cus-pointer" />
                        </div>
                    </div>
                    <div className="header-right d-flex">
                        <div className="short-icon">
                            <BiSortAlt2 />
                        </div>
                        <div
                            className="btn-add"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalAddTodo"
                        >
                            <Controls.ButtonCus>
                                <AiOutlinePlus className="mx-2" />
                                Tambah
                            </Controls.ButtonCus>
                        </div>
                    </div>
                </div>
                <div className="content-body my-5">
                    <div className="row">
                        {getListTodoResult ? (
                            <>
                                {getListTodoResult.data?.map((item, index) => {
                                    return (
                                        <div
                                            className="col-lg-12 my-2"
                                            key={index}
                                        >
                                            <div className="card bg-light text-dark  py-2">
                                                <div className="container">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="side-title d-flex">
                                                            <div className="checkbox-todo mx-2">
                                                                <input
                                                                    type="checkbox"
                                                                    onChange={() => {
                                                                        handleCheckBox(
                                                                            item
                                                                        );
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="title-todo mx-2 align-items-center d-flex align-items-center">
                                                                <div
                                                                    className={`label-indicator mx-2 ${item.priority}`}
                                                                ></div>
                                                                <div>
                                                                    <h6
                                                                        className={
                                                                            boxCheck
                                                                                ? "p-1 strikethrough italic"
                                                                                : boxCheck
                                                                        }
                                                                    >
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="edit-todo">
                                                                <i
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#ModalAddTodo"
                                                                    onClick={() => {
                                                                        handleEditTodo(
                                                                            item
                                                                        );
                                                                    }}
                                                                >
                                                                    <FaPencilAlt
                                                                        size={
                                                                            12
                                                                        }
                                                                    />
                                                                </i>
                                                            </div>
                                                        </div>
                                                        <div className="right-content">
                                                            <i
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#ModalDelete"
                                                                onClick={() => {
                                                                    setIdTodo(
                                                                        item
                                                                    );
                                                                }}
                                                            >
                                                                <BsTrash />
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        ) : getListTodoLoading ? (
                            <>Loading Data...</>
                        ) : (
                            <p>
                                {getListTodoError
                                    ? getListTodoLoading
                                    : "Loading Data..."}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <ModalAddTodo
                exampleModal="ModalAddTodo"
                modalTitle={<>Tambah Todo-List</>}
                idTodo={idact}
            />
            <ModalDelete
                modalTitle={<>Delete Todo</>}
                handleSubmit={handleDelete}
                exampleModal="ModalDelete"
                bodyContent={<>Yakin Mau delete ini?</>}
            />
        </>
    );
}

export default DetailActivity;
