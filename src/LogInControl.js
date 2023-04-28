import React from "react";
import { LoginButton, LogoutButton } from "./Button";
import Greeting from "./Greeting";
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // let button;
    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }

    return (
      <div>
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
        <Greeting isLoggedIn={isLoggedIn} />
        {/* {button} */}
        <h1>
          {" "}
          The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
        </h1>
      </div>
    );
  }
}
export default LoginControl;
