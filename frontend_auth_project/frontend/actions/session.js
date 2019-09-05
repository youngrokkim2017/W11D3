import {postUser, postSession, deleteSession} from '../utils/session';

// receive current user
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// log out current user
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

// make action creators
const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER // no payload? yes we have logged the user out
});

//thunk actions

//creates user
export const createNewUser = formUser => dispatch => postUser(formUser) 
.then(user => dispatch(receiveCurrentUser(user)));
//takes in a user object from a form

//logs in user
export const logIn = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

//logs out user
export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));
    // want it to call a callback, dispatched logoutCurrentUser