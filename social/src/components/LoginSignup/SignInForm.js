import React, { Component } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(e) {
    //     let target = e.target;
    //     let value = target.type === 'checkbox' ? target.checked : target.value;
    //     let name = target.name;

    //     this.setState({
    //       [name]: value
    //     });
    // }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      }) 
    }

    handleSubmit(e) {
        const username = this.state.username
        const password = this.state.password
        localStorage.setItem('username', username)
        localStorage.setItem('username', password)
        this.props.history.push('/addStudent')
        // window.location.reload()
        // console.log('The form was submitted with the following data:');
        // console.log(this.state);
    }

    render() {
        return (
          <div>
            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Username</label>
                <input 
                  type="email" 
                  id="email" 
                  className="FormField__Input" 
                  placeholder="Enter your email" 
                  name="username" 
                  value={this.state.username} 
                  onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input 
                  type="password"  
                  id="password" 
                  className="FormField__Input" 
                  placeholder="Enter your password" 
                  name="password" 
                  value={this.state.password} 
                  onChange={this.handleChange} />
              </div>
              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/home" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}
 </div>
  )
 }
}
         

export default withRouter(SignInForm);