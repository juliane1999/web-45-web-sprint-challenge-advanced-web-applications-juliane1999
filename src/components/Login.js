import React from "react";
import axios from 'axios'

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    },
    error:''
  };

  
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

 login = e => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  e.preventDefault();
    
    this.state.error = 'Username or Password not valid';
    if(this.state.credentials.username === '' || this.state.credentials.password === '') {
      return this.state.error
    }
    else if(this.state.credentials.username === 'Lambda' && this.state.credentials.password === 'School') {
      return axios.post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push('/bubbles');
      })
      .catch(err=> {
        console.log(err);
      });
    }
  };
    
  //replace with error state




  render(){
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <div>
        <form onSubmit={this.login}>
          <label>Username:
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            id='username'
          />
          </label>
          <label>Password:
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            id='password'
          />
          </label>
          <button id='submit'>Log in</button>
        </form>
      </div>
      </div>

      <p id="error" className="error">{this.state.error}</p>
    </div>
  );
};
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"