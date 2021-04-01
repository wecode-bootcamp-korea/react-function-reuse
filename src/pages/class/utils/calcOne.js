// STEP.1  ver.noop
// addOne = (that) => {
//   that.setState({count: this.state.count + 1})
// }

// minusOne = (that) => {
//   that.setState({count: this.state.count - 1})
// }

// STEP2. ver.pro
export const calcOne = (e, that) => {
  if (e.target.innerText === "+") {
    that.setState((state) => ({ count: state.count + 1 }));
  } else {
    that.setState((state) => ({ count: state.count - 1 }));
  }
};

// export const calcOne = (e, that) => {
//   const plusSign = e.target.innerText === "+" ? 1 : -1;

//   that.setState((state) => ({ count: state.count + 1 * plusSign }));
// };

//만약 다른 컴포넌트에서 사용하게 될 경우 해당 this맥락이 변하게 되므로
//화살표 함수를 사용해줘야함.
