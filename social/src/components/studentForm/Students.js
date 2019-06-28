import React, { Component } from 'react';

import Student from './Student';

class Students extends Component {
  render() {
    return (
      <div className="Students">
        <h1>Student List</h1>
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
