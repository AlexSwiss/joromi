import axios from 'axios';
import { GET_EVENTS, EVENTS_LOADING } from './types';

export const getEvents = () => dispatch => {
    dispatch(setEventsLoading());
    axios.get('http://localhost:5000/api/events').then(res =>
            dispatch({
                type: GET_EVENTS,
                payload: res.data
            })
        );
};

export const setEventsLoading = () => {
    return {
        type: EVENTS_LOADING
    }
}