import React, { Component } from "react";
import { connect } from "react-redux";

import { ambilDataPost } from "../action";

export class App extends Component {
  componentDidMount() {
    this.props.ambilDataPost();
  }

  renderList() {
    if (!this.props.ListPost.data) {
      return null;
    }

    const listpost = this.props.ListPost.data;

    return listpost.map((post) => {
      return (
        <>
          <div className="card">
            <div className="card-header">{post.id}</div>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <a href="#" className="btn btn-primary">
                Lihat Detail
              </a>
            </div>
          </div>
          <br />
        </>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h1>DAFTAR POST</h1>
        {this.renderList()}
      </div>
    );
  }
}

const stateToProp = (state) => {
  return { ListPost: state.ListPost };
};

export default connect(stateToProp, { ambilDataPost })(App);
