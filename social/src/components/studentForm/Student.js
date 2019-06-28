import React from 'react'

function Student(props) {
  const student = props.students.find(
    info => `${info.id}` === props.match.params.id
  );

  return (
    <div className="Student">
      <h4>First Name: {props.firstName}</h4>
      <h4>Last Name: {props.lastName}</h4>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <img src={props.photoUrl} alt={props.id} />
      <button onClick={e => props.setUpdateStudent(e, student)} className="md-button">
        Update Information
      </button>
      <button onClick={e => props.deleteStudent(e, student)} className="md-button">
        Delete 
      </button>
    </div>
  );
};

Student.defaultProps = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  photoUrl: ''
};

export default Student;
