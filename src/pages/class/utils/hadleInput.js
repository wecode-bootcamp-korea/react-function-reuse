export const handleInput = (e, that) => {
  const { name, value } = e.target;
  that.setState({ [name]: value });
};
