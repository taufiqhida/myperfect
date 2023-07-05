import axios from "axios";
import { FETCH_PAGE } from "../types";

export const fetchPage = (url, page) => (dispatch) => {
    return axios.get(url).then(response => {
        dispatch({
            type: FETCH_PAGE,
            payload: {
                [page]: response.data,
            },
        });
        return response.data;
    });
};