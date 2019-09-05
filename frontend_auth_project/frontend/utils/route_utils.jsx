//make methods that automates if you are logged in you see the protectec, and if you are not logged in you see the auth

import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});
// use this for auth route and protected route


// we want to redirect the user if they are logged in to the home page
// <AuthRoute path="" component={} />
const Auth = ({ loggedIn, path, component: Component }) => (
    <Route //render a route component
    path={path}
    render={props => ( //this takes in a arrow function and returns a react function
        //want to render depending on???
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
    />
);

const Protected = ({ loggedIn, path, component: Component }) => {
    <Route
    path={path}
    render={props => (
        loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    )}
    />
}

//part 10
//const Bool = 

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));