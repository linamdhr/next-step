import React from "react";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      address: "",
      contact: 1,
      email: "",
      college: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;

    const name = target.name;
    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name:
          <input
            name="fname"
            type="text"
            value={this.state.fname}
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <label>
          Last name:
          <input
            name="lname"
            type="text"
            value={this.state.lname}
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <label>
          Address:
          <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <label>
          Contact:
          <input
            name="contact"
            type="number"
            value={this.state.contact}
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <label>
          file upload:
          <input
            name="fileupload"
            type="file"
            value={this.state.fileupload}
            onChange={this.handleChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm;
