import React, { Component } from 'react';
import { Route, 
        withRouter,} from 'react-router-dom';
import axios from 'axios';

import SignUpForm from './components/LoginSignup/SignUpForm';
import SignInForm from './components/LoginSignup/SignInForm';
import AddStudent from './components/studentForm/AddStudent';
import UpdateStudent from './components/studentForm/UpdateStudent';
import Students from './components/studentForm/Students';

import './App.css';
import Student from './components/studentForm/Student';


class App extends Component {
  constructor() {
    super();
    this.state= {
      students:[],
      activeStudent: null
    };
  }
componentDidMount() { 
  axios
  .get('http://localhost:5000/school')
  .then(response => this.setState({ students:response.data }))
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

  deleteStudent = (e, student) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/school/:id${student.id}`)
      .then(response => {
        this.setState({ students: response.data });
        this.props.history.push("/students");
      })
      .catch(err => console.log(err));
    }

  render() {
    return (
        <div className="App">
          <nav>
          <h1 className="store-header">International Social Worker</h1>
        </nav>
          <div className="App__Aside"></div>
          <div className="App__Form"></div>
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
              <Route
                path='/students/:id'
                render={props => (
                  <Student
                    {...props}
                    deleteStudent={this.deleteStudent}
                    setUpdateStudent={this.setUpdateStudent}
                    students={this.state.students}/>)}
              />
        </div>
    );
  }
}

export default withRouter(App);