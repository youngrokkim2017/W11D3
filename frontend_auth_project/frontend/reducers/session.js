import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

//want to create default state, want session state to keep track of current user
const _nullSession = {
    currentUser: null,
    // want this returned if there is no current user
}

// every reducer takes in takes in two args (prevState, action)
export default (state = _nullSession, action) => {
    //freeze state so we don't accidentally mutate the state
    Object.freeze(state);

    // create switch
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            //return a new slice of state, current user nested under the name current user
            return Object.assign({}, { currentUser: action.user });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}


// now that we have the basics of our session_reducer
// now we go into root reducer and add in session_reducer at the the root level