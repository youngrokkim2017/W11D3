import React from 'react';

class Signup extends React.Component {
    //PART 5
    // now want to have a signup component, create a local state to keep track of all the forms
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //builds actions the form will use
    handleInput(type) {
        //want it to return arrow function that will set the state
        return (e) => {
            this.setState({ [type]: e.target.value }); //any keys that match our state will get updated
        };
    }

    //make method that handles the submitting info of our state to the backend
    handleSubmit(e) {
        //want to prevent the default action, b/c it sends a post request which we do not want
        e.preventDefault();
        //next want to use createnewuser
        this.props.createNewUser(this.state)
        .then(() => this.props.history.push('/chirps'));
        // if we successfully make a new user
        //want to call a callback function
    }
    //have to methods to make our form work
    //now make form in render

    render() {
        return(
            <div className="session-form">
                <h2>Sign Up</h2>
                <form>
                    <label>Username
                        <input 
                        type="text" 
                        value={this.state.username}
                        //use jsx react method onchange
                        //everytime it will call handleinput
                        //which will set the type to the e.target.value
                        onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Email
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button
                    onClick={this.handleSubmit} 
                    //problem calling handleSubmit in onClick
                    //handleSubmit is not bound to the current scope
                    // in constructor make this.handleSubmit
                    // now call handleSubmit and it will be bound
                    >Sign Up</button>
                </form>
            </div>
        );
    }
};

export default Signup;
// now set up props