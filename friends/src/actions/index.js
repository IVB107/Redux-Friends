import axios from 'axios';
// import axiosWithAuth from '../axiosAuth';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGGED_IN = 'LOGGED_IN';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const GOT_FRIENDS = 'GOT_FRIENDS';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const ERROR = 'ERROR';

// { username: 'Lambda School', password: 'i<3Lambd4' }

export const fetchFriends = dispatch => {
    console.log('Local Storage token:')
    console.log(localStorage.token);

    dispatch({
        type: FETCHING_FRIENDS
    })
    axios
        .get('http://localhost:5000/api/friends', {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res);
            dispatch({
                type: GOT_FRIENDS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
        });
    // axiosWithAuth.length('http://localhost:5000/api/friends')
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
}

export const login = creds => dispatch => {
    console.log('Inside login action creator');
    dispatch({ type: LOGGING_IN });
    return axios.post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({
                type: LOGGED_IN,
                payload: res.data.payload
            });
            console.log('About to fetch friends...');
            fetchFriends(dispatch);
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: ERROR,
                dispatch: 'Login authentication failure'
            })
        })
}