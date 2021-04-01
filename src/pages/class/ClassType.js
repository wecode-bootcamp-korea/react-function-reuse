import React, { Component } from "react";
import Count from "./components/Count";
import Sort from "./components/Sort/Sort";
import Form from "./components/Form/Form";

import "../class/ClassType.scss";

export const API = "https://jsonplaceholder.typicode.com/users";

class ClassType extends Component {
  render() {
    return (
      <div className="container">
        <Count />
        <Sort />
        <Form />
      </div>
    );
  }
}

export default ClassType;
