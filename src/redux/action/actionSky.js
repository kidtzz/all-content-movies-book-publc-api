import axios from "axios";
import { toast } from "react-toastify";

const apiGet = "https://todo.api.devcode.gethired.id/activity-groups/";
const apiDel = "https://todo.api.devcode.gethired.id/activity-groups/";
const apiAdd = "https://todo.api.devcode.gethired.id/activity-groups/";
// const apiPost = "https://todo.api.devcode.gethired.id/todo-items";

export const GET_LIST_SKY = "GET_LIST_SKY";
export const GET_ID_SKY = "GET_ID_SKY";
export const ADD_TODO_SKY = "ADD_TODO_SKY";
export const DELETE_SKY = "DELETE_SKY";

export const getIdSky = (data) => {
    return (dispatch) => {
        dispatch({
            type: GET_ID_SKY,
            payload: {
                loading: true,
                data: data,
                errorMsg: false,
            },
        });
    };
};

export const getSky = () => {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_SKY,
            payload: {
                loading: true,
                data: false,
                errorMsg: false,
            },
        });
        axios
            .get(apiGet)
            .then((response) => [
                dispatch({
                    type: GET_LIST_SKY,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMsg: false,
                    },
                }),
            ])
            .catch((error) => {
                dispatch({
                    type: GET_LIST_SKY,
                    payload: {
                        loading: false,
                        data: false,
                        errorMsg: error.message,
                    },
                });
            });
    };
};

export const addSky = (data) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: ADD_TODO_SKY,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: "POST",
            url: apiAdd,
            timeout: 12000,
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: ADD_TODO_SKY,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
                toast.success("todo-added");
            })
            .catch((error) => {
                dispatch({
                    type: ADD_TODO_SKY,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const deleteSky = (id) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: DELETE_SKY,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        //get API
        axios({
            method: "DELETE",
            url: apiDel + id,
            timeout: 12000,
        })
            .then((response) => {
                dispatch({
                    type: DELETE_SKY,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
                toast.error("data berhasil delete");
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_SKY,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
