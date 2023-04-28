import React from "react";
class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputNUmber: 0 };
  }
  textbox(e) {
    this.setState({
      inputNUmber: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input type="number " onChange={(e) => this.textbox(e)} />
        <h1>{this.state.inputNUmber}</h1>
      </div>
    );
  }
}
export default Number;
