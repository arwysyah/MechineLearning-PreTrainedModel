function Matrix(rows, cols) {
  this.rows = rows;
  this.cols = cols;

  this.matrix = [];

  for (let i = 0; i < this.rows; i++) {
    this.matrix[i] = [];
    for (let j = 0; j < this.cols; j++) {
      this.matrix[i][j] = 0;
    }
  }
}
Matrix.prototype.randomize = function () {
  for (let x = 0; x < this.rows; x++) {
    for (let y = 0; y < this.cols; y++) {
      this.matrix[x][y] = Math.floor(Math.random() * 3);
    }
  }
};
Matrix.prototype.add = function (n) {
  if (n instanceof Matrix) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] += n.matrix[i][j];
      }
    }
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] += n;
      }
    }
  }
};
Matrix.prototype.multiply = function (t, n) {
  console.log(n, "n Matrix");
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.matrix[i][j] *= n;
    }
  }
};
