import { FETCHING, SUCCESS, ERROR } from '../actions';

const initialState = {
    friends: [],
    fetching: false,
    error: ''
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING:
            return {
                ...state,
                friends: [],
                fetching: true,
                error: ''
            }
        case SUCCESS:
            return {
                
            }
        case ERROR: 
            return {

            }
        default:
            return state;
    }
}