module.exports = function countCats(matrix) {

let number = 0;

if ((matrix != undefined) && (matrix.length != 0)) for (let rows of matrix) {
  for (let elem of rows) {
    if (elem === "^^") ++number;
  }
}

return number;
};
