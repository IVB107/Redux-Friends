import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const ERROR = 'ERROR';

// { username: 'Lambda School', password: 'i<3Lambd4' }

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
            // Request friend data upon successful login
            fetchFriends(creds);
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: ERROR,
                dispatch: 'Login authentication failure'
            })
        })
}

export const fetchFriends = (creds) => {
    console.log('Local Storage token:')
    console.log(localStorage.token);
    console.log('Credentials:')
    console.log(creds);
    axios
        .get('http://localhost:5000/api/friends', creds)
        .then(res => {
            console.log(res);
            // trigger function to set response data on redux store friends array
        })
        .catch(err => {
            console.log(err);
        });
}
