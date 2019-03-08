import { 
    LOGGING_IN, 
    FETCHING_FRIENDS,
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
        case FETCHING_FRIENDS:
            return {
                ...state
            }
        case SAVING_FRIENDS:
            return {
                ...state
            }
        case UPDATING_FRIEND:
            return {
                ...state
            }
        case DELETING_FRIEND:
            return {
                ...state
            }
        case ERROR: 
            return {
                ...state,
            }
        default:
            return state;
    }
}