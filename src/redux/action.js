import axios from 'axios';
export const GRAPH_DATA = 'GRAPH_DATA';
export const LOADING_ERROR = 'LOADING_ERROR';


export const getData = payload => {
    const requestParam = {
        method: 'GET',
        url: 'https://run.mocky.io/v3/2d7acdd7-cf46-4659-a6b3-c0a65f1ec439',
        data: payload
    }
    return dispatch => {
        return axios(requestParam)
            .then(res => {
                const data = res.data;
                return dispatch(graphData(data))
            })
            .catch(error => {
                return dispatch(loadingError(error))
            })
    };
};

export const graphData = (payload) => ({
    type: GRAPH_DATA,
    payload
})

export const loadingError = (payload) => ({
    type: LOADING_ERROR,
    payload
})