import { combineReducers } from 'redux';
import entitiesReducer from './entities';

// after session_reducer 
import sessionReducer from './session';

export default combineReducers({
  entities: entitiesReducer,
  //add session reducer
  session: sessionReducer,
});

// part 4
// next step is to create a form to create a new user from frontend
// before though, need to make a container
// new folder components/session/signup_container.js
// also create components/session/signup.jsx