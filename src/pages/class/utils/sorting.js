//STEP 2. ver noop
// const handleUpperSort = (arr) => {
// 	return [...arr].sort((a, b) => b - a))
// }

// const handleLowerSort = (arr) => {
// 	return [...arr].sort((a, b) => a - b))
// }

//STEP 2. ver pro
export const handleSort = (arr, direction) => {
  const directionTable = {
    내림차순: (a, b) => a - b,
    오름차순: (a, b) => b - a,
  };

  return [...arr].sort(directionTable[direction]);
};
