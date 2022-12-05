import { GET_ID_QURAN, GET_LIST_QURAN } from "../action/actionQuran";

const initialState = {
    getListQuranResult: false,
    getListQuranLoading: false,
    getListQuranError: false,

    getIdQuranResult: false,
};

const reducerQuran = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_QURAN:
            return {
                ...state,
                getListQuranResult: action.payload.data,
                getListQuranLoading: action.payload.loading,
                getListQuranError: action.payload.errorMsg,
            };

        case GET_ID_QURAN:
            return {
                ...state,
                getIdQuranResult: action.payload.data,
            };
        default:
            return state;
    }
};

export default reducerQuran;
