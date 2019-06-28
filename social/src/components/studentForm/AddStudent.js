import React from "react";

class AddStudent extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      photoUrl: ""
    }

  };

  submitStudent = event => {
    event.preventDefault();
    this.props.addStudent(this.state)
    this.setState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        photoUrl: ""
    });
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="StudentForm">
        <form onSubmit={this.submitStudent}>
          <input
            onChange={this.handleInputChange}
            placeholder="First Name"
            value={this.state.firstName}
            name="firstName"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Last Name"
            value={this.state.lastName}
            name="lastName"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Phone"
            value={this.state.phone}
            name="phone"
          />
           <input
            onChange={this.handleInputChange}
            placeholder="Email"
            value={this.state.email}
            name="email"
          />
           <input
            onChange={this.handleInputChange}
            placeholder="Student Photo"
            value={this.state.photoUrl}
            name="photoUrl"
          />
          <button type="submit">Add Student</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;



