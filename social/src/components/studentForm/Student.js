import React from 'react'

const Student = props => {
  return (
    <div className="Student">
      <h4>First Name: {props.firstName}</h4>
      <h4>Last Name: {props.lastName}</h4>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <img src={props.photoUrl} alt={props.id} />
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
