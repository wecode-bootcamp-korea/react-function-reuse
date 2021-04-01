import { Component } from "react";

export default class BarChart extends Component {
  render() {
    return (
      <div>
        {this.props.arr.map((num, idx) => {
          return (
            <div
              key={idx}
              style={{
                width: "10px",
                height: num + "px",
                display: "inline-block",
                color: "white",
                textAlign: "center",
                backgroundColor: "#1e3799",
                opacity: 1 - idx * 0.1,
              }}
              className="num"
            >
              {num}
            </div>
          );
        })}
      </div>
    );
  }
}
