import React, { Component } from "react";
import BarChart from "./BarChart";
import { handleSort } from "../../utils/sorting";

class Sort extends Component {
  render() {
    return (
      <>
        <h1>Step2. sort</h1>
        <div className="sortWrap">
          <BarChart arr={ARR_NUM} />
          <BarChart arr={handleSort(ARR_NUM, "내림차순")} />
          <BarChart arr={handleSort(ARR_NUM, "오름차순")} />
        </div>
      </>
    );
  }
}

export default Sort;

const ARR_NUM = [12, 2, 34, 5, 32, 8, 10];
