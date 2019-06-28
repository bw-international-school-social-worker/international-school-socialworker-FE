import React, { Component } from 'react';
import { Route, 
        withRouter,
         NavLink } from 'react-router-dom';
import axios from 'axios';

import SignUpForm from './components/LoginSignup/SignUpForm';
import SignInForm from './components/LoginSignup/SignInForm';
import AddStudent from './components/studentForm/AddStudent';
import UpdateStudent from './components/studentForm/UpdateStudent';
import Students from './components/studentForm/Students';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      students:[]
    };
  }
componentDidMount() { 
  axios
  .get('http://localhost:5000/school')
  .then(response => this.setState({ students: response.data }))
  .catch(error => console.log(error));
 }

 addStudent = student => {
  axios
  .post('http://localhost:5000/school', student)
  .then(response => {
    this.setState({ students: response.data });
    this.props.history.push("/students");
  })
  .catch(err => console.log(err));
}

setUpdateStudent = (e, student) => {
  e.preventDefault();
  this.setState({ activeStudent: student });
  this.props.history.push("/update-student");
}

updateStudent = student => {
  axios
    .put(`http://localhost:5000/school/:id${student.id}`, student)
    .then(response => {
      this.setState({ students: response.data });
      this.props.history.push("/students");
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
        <div className="App">
          <nav>
          <h1 className="store-header">International Social Worker</h1>
          <div className="nav-links">
            <NavLink exact to="/addStudent">
              Add Student
            </NavLink>
            <NavLink exact to="/students">
              My Student List
            </NavLink>
          </div>
        </nav>
          <div className="App__Aside"></div>
          <div className="App__Form">
              <Route 
                exact path="/" 
                render={(props) => 
                  <SignUpForm {...props}/>}
               />
              <Route 
                exact path="/sign-in" 
                render={(props) => 
                  <SignInForm {...props}/>}
              />
              <Route 
                exact path='/addStudent' 
                render={props => (
                  <AddStudent {...props} addStudent={this.addStudent} />
              )}/>
              <Route 
                path="/update-student"
                render={props => (
                  <UpdateStudent
                    {...props}
                      updateStudent={this.updateStudent}
                      activeStudent={this.state.activeStudent}/>)} 
                />
              <Route
                exact path='/students'
                render={props => 
                  <Students {...props} students={this.state.students}/>}
              />
          </div>
        </div>
    );
  }
}

export default withRouter(App);