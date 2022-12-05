import axios from "axios";

const quranAPI = "http://api.alquran.cloud/v1/quran/en.asad";

export const GET_LIST_QURAN = "GET_LIST_QURAN";
export const GET_ID_QURAN = "GET_ID_QURAN";

export const getIdQuran = (data) => {
    return (dispatch) => {
        dispatch({
            type: GET_ID_QURAN,
            payload: {
                loading: true,
                data: data,
                errorMsg: false,
            },
        });
    };
};

export const getQuran = () => {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_QURAN,
            payload: {
                loading: true,
                data: false,
                errorMsg: false,
            },
        });
        axios
            .get(quranAPI)
            .then((response) => {
                dispatch({
                    type: GET_LIST_QURAN,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMsg: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_LIST_QURAN,
                    payload: {
                        loading: false,
                        data: false,
                        errorMsg: error.message,
                    },
                });
            });
    };
};
