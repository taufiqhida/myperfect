import { CHECKOUT_BOOKING } from "../types";
import axios from "axios";

export const checkoutBooking = (payload) => (dispatch) => {
    dispatch({
        type: CHECKOUT_BOOKING,
        payload: payload,
    });
};

export const submitBooking = (payload) => (dispatch) => {
    return axios.post(`https://admin-myperfect-ba1b35b50c63.herokuapp.com/api/v1/member/booking-page`,
        payload,
        { headers: {contentType: "multipart/form-data"}})
};

