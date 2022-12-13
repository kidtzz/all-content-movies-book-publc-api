import {
    DELETE_SKY,
    GET_ID_SKY,
    GET_LIST_SKY,
    ADD_TODO_SKY,
} from "../action/actionSky";

const initialState = {
    getListSkyResult: false,
    getListSkyLoading: false,
    getListSkyError: false,

    deleteSkyResult: false,
    deleteSkyLoading: false,
    deleteSkyError: false,

    addSkyResult: false,
    addSkyLoading: false,
    addSkyError: false,

    getIdSkyResult: false,
};

const reducerSky = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_SKY:
            return {
                ...state,
                getListSkyResult: action.payload.data,
                getListSkyLoading: action.payload.loading,
                getListSkyError: action.payload.errorMsg,
            };

        case GET_ID_SKY:
            return {
                ...state,
                getIdSkyResult: action.payload.data,
            };
        case DELETE_SKY:
            return {
                ...state,
                deleteSkyResult: action.payload.data,
                deleteSkyLoading: action.payload.loading,
                deleteSkyError: action.payload.errorMessage,
            };
        case ADD_TODO_SKY:
            return {
                ...state,
                addSkyResult: action.payload.data,
                addSkyLoading: action.payload.loading,
                addSkyError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default reducerSky;
