import React, { Component } from "react";
import { connect } from "react-redux";

import { ambilUser } from "../action";

export class NamaUser extends Component {
  render() {
    return <div>{this.props.User ? this.props.User.name : null}</div>;
  }
}

const stateToProp = (state, props) => {
  return { User: state.Users.find((user) => user.id === props.userId) };
};

export default connect(stateToProp, { ambilUser })(NamaUser);
