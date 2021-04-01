import React, { Component } from "react";
import { handleInput } from "../../utils/hadleInput";

class Input extends Component {
  render() {
    const { formats, state } = this.props;
    console.log(state);
    return (
      <>
        <h1>Step3. Form</h1>
        {formats.map((format) => {
          return (
            <div key={format.name} className="InputWrapper">
              <p>{state.state[format.name]}</p>
              <input
                name={format.name}
                onChange={(e) => handleInput(e, state)}
                type={format.type}
                placeholder={format.placeholder}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default Input;
