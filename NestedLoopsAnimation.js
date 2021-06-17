// class Matrix {
//   constructor(rows, cols) {
//     this.rows = rows;
//     this.cols = cols;

//     this.matrix = [];

//     for (let i = 0; i < this.rows; i++) {
//       this.matrix[i] = [];
//       for (let j = 0; j < this.cols; j++) {
//         this.matrix[i][j] = 0;
//       }
//     }
//   }
//   randomize() {
//     for (let x = 0; x < this.rows; x++) {
//       for (let y = 0; y < this.cols; y++) {
//         this.matrix[x][y] = Math.floor(Math.random() * 3);
//       }
//     }
//   }
//   add(n) {
//     if (n instanceof Matrix) {
//       for (let i = 0; i < this.rows; i++) {
//         for (let j = 0; j < this.cols; j++) {
//           this.matrix[i][j] += n.matrix[i][j];
//         }
//       }
//     } else {
//       for (let i = 0; i < this.rows; i++) {
//         for (let j = 0; j < this.cols; j++) {
//           this.matrix[i][j] += n;
//         }
//       }
//     }
//   }
//   multiply(n) {
//     console.log(n, "n Matrix");
//     for (let i = 0; i < this.rows; i++) {
//       for (let j = 0; j < this.cols; j++) {
//         this.matrix[i][j] *= n;
//       }
//     }
//   }

//   multiplyMatrix(n) {
//     // console.log(n, "n Matrix");
//     if (n instanceof Matrix) {
//       if (this.cols != n.rows) {
//         console.log("Coloumn of A must match rows of B");
//         return undefined;
//       } else {
//         // console.log("ok");
//         let a = this;
//         let b = n;
//         console.table(a.matrix, b.matrix, "A");
//         console.table(this.rows, n.cols, "B");
//         let result = new Matrix(this.rows, n.cols);
//         console.table(result, "res");
//       }
//     } else {
//       for (let i = 0; i < this.rows; i++) {
//         for (let j = 0; j < this.cols; j++) {
//           this.matrix[i][j] *= n;
//         }
//       }
//     }
//   }
// }
function setup() {
  createCanvas(1250, 1250);
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(255);

  // for (let i = 0; i <= width; i += 50) {
  //   for (let y = 0; y <= height; y += 50) {
  //     fill(random(255), 0, random(252));
  //     ellipse(i, y, 25, 24);
  //   }
  // }  full Loop nested

  // for (let i = 0; i <= width; i += 50) {
  //   for (let y = 0; y <= height; y += 50) {
  //     fill(random(255), 0, random(252));
  //     ellipse(mouseX, mouseY, 25, 24);
  //   }
  // } animation loop mouse  move
  // for (let y = 0; y <= height; y += 50) {
  //   fill(random(255), 0, random(255));
  //   ellipse(3, 200, 25, 25);
  // }

  for (let i = 0; i <= width; i += 50) {
    for (let y = 0; y <= height; y += 50) {
      fill(random(255), 0, random(252));
      ellipse(i, 200, i - mouseX, width / 2 - mouseY);
    }
  }
}
