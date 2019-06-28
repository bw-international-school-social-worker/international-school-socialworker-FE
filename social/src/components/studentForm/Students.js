import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Student from './Student';

class Students extends Component {
  render() {
    return (
      <div className="Students">
        <h1>Student List</h1>
        <nav>
          <div className="nav-links">
            <NavLink exact to="/addStudent">
              Add Student
            </NavLink>
            <NavLink exact to="/students">
              My Student List
            </NavLink>
          </div>
        </nav>
        <ul>
          {this.props.students.map(student => {
            return (
              <Student
                firstName={student.firstName}
                id={student.id}
                lastName={student.lastName}
                phone={student.phone}
                email={student.email}
                photoUrl={student.photoUrl}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Student.defaultProps = {
 students: [],
};

export default Students;
