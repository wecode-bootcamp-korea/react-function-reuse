import React, { Component } from "react";
import Input from "./Input";
import { INPUT_FORMAT } from "./formats";

class Form extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    address: "",
  };

  render() {
    return (
      <div className="FormWrapper">
        <Input state={this} formats={INPUT_FORMAT} />
      </div>
    );
  }
}

export default Form;
