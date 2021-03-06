import React from "react";

class UpdateStudent extends React.Component {
  state = {
    item: this.props.activeStudent
  };

//   changeHandler = ev => {
//     ev.persist();
//     let value = ev.target.value;
//     if (ev.target.name === "price") {
//       value = parseInt(value, 10);
//     }

//     this.setState(prevState => ({
//       item: {
//         ...prevState.item,
//         [ev.target.name]: value
//       }
//     }));
//   };

  handleSubmit = e => {
    e.preventDefault();
    this.props.UpdateStudent(this.state.student);
    /*
   - handleSubmit: It will recieve our "updateItem" as props,'this.props.updateItem(this.state.item);'
  */
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Update Student Information</h2>
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
          <button type="submit">Update Information</button>
        </form>
      </div>
    );
  }
}

export default UpdateStudent;
