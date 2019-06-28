import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
           username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
      this.props.history.push('/sign-in')
      // window.location.reload()
      console.log('The form was submitted with the following data:');
      console.log(this.state);
  }



    // handleSubmit(e, credentials) {
    //     e.preventDefault();

    //     // console.log('The form was submitted with the following data:');
    //     // console.log(this.state);
    //    axios
    //    .post('https://lambda-intschools.herokuapp.com/createnewuser/socialworker', credentials)
    //    .then(response => this.setState({ students: response.data }))
    //    .catch(error => console.log(error));
    //  }

    render() {
        return (
          <div>
        <div className="PageSwitcher">
          <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
          <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
        </div>
        <div className="FormCenter">
            <form onSubmit={e =>this.handleSubmit(e, this.state)} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Username</label>
                <input 
                  type="text" 
                  id="name" 
                  className="FormField__Input" 
                  placeholder="Enter username" 
                  name="username" 
                  value={this.state.username} 
                  onChange={this.handleChange} 
                  />
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
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
          </div>
         
        );
    }
}
export default SignUpForm;