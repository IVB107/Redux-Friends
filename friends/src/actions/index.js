import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
    return (dispatch) => {
        dispatch({
            type: LOGGING_IN
        });
        axios.get(``)
        .then(res => {
            // dispatch()
            console.log(res);
        })
        .catch(err => {
            // dispatch()
            console.log(err);
        })
    }
}