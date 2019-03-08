import { 
    LOGGING_IN, 
    LOGIN_SUCCESS,
    FETCHING_FRIENDS,
    GOT_FRIENDS,
    SAVING_FRIENDS,
    UPDATING_FRIEND,
    DELETING_FRIEND, 
    ERROR 
} from '../actions';

const initialState = {
    loggingIn: false,
    friends: [],
    fetchingFriends: false,
    savingFriends: false,
    updatingFriend: false,
    deletingFriend: false,
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGGING_IN:
            return {
                ...state,
                loggingIn: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: ''
            }
        case FETCHING_FRIENDS:
            return {
                ...state,
                error: ''
            }
        case GOT_FRIENDS:
            return {
                ...state,
                friends: action.payload,
                error: ''
            }
        case SAVING_FRIENDS:
            return {
                ...state,
                error: ''
            }
        case UPDATING_FRIEND:
            return {
                ...state,
                error: ''
            }
        case DELETING_FRIEND:
            return {
                ...state,
                error: ''
            }
        case ERROR: 
            return {
                ...state,
                error: 'Error'
            }
        default:
            return state;
    }
}