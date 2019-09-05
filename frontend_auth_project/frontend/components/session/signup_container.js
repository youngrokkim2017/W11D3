//first thing is import everything needed for a connected container
import { connect } from 'react-redux';
// also import actions we need to create a new user
import { createNewUser } from '../../actions/session';
// import our signup component
import Signup from './signup'; //haven't made sign up so make it in signup.jsx


//now set up props

//just want to pass down the action to sign up user
const mapDispatchToProps = dispatch => ({
    //going to...
    createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(null, mapDispatchToProps)(Signup);

// THIS WILL GIVE US create new user 


//PART 5
// now want to have a signup component, create a local state to keep track of all the forms