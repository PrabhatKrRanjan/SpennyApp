import { GRAPH_DATA, LOADING_ERROR } from './action'

const initialState = {
    isLoading: true,
    loadingError: false,
    errorMessage: "",
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GRAPH_DATA:
            return {
                data: action.payload,
                isLoading: false,
                loadingError: false,
                errorMessage: ""
            };

        case LOADING_ERROR:
            return {
                data: [],
                isLoading: false,
                loadingError: true,
                errorMessage: action.payload
            };

        default:
            return state;
    }
}

export default reducer;