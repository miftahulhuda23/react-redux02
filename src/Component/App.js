import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ListPost from "./ListPost";
import DetailPost from "./DetailPost";

export class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route path="/" exact component={ListPost} />
          <Route path="/detail/:idpost" component={DetailPost} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
