import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
    return (dispatch) => {
        dispatch({
            type: FETCHING
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