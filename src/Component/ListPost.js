import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { ambilPostdanUser } from "../action";
import NamaUser from "./NamaUser";

export class ListPost extends Component {
  componentDidMount() {
    this.props.ambilPostdanUser();
  }

  renderList() {
    if (!this.props.ListPost.data) {
      return null;
    }

    const listpost = this.props.ListPost.data;

    return listpost.map((post) => {
      return (
        <div key={post.id}>
          <div className="card">
            <div className="card-header">
              <NamaUser userId={post.userId} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <Link to={`/detail/${post.id}`} className="btn btn-primary">
                Lihat Detail
              </Link>
            </div>
          </div>
          <br />
        </div>
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

export default connect(stateToProp, { ambilPostdanUser })(ListPost);
