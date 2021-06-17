// // class Matrix {
// //   constructor(rows, cols) {
// //     this.rows = rows;
// //     this.cols = cols;

// //     this.matrix = [];

// //     for (let i = 0; i < this.rows; i++) {
// //       this.matrix[i] = [];
// //       for (let j = 0; j < this.cols; j++) {
// //         this.matrix[i][j] = 0;
// //       }
// //     }
// //   }
// //   randomize() {
// //     for (let x = 0; x < this.rows; x++) {
// //       for (let y = 0; y < this.cols; y++) {
// //         this.matrix[x][y] = Math.floor(Math.random() * 3);
// //       }
// //     }
// //   }
// //   add(n) {
// //     if (n instanceof Matrix) {
// //       for (let i = 0; i < this.rows; i++) {
// //         for (let j = 0; j < this.cols; j++) {
// //           this.matrix[i][j] += n.matrix[i][j];
// //         }
// //       }
// //     } else {
// //       for (let i = 0; i < this.rows; i++) {
// //         for (let j = 0; j < this.cols; j++) {
// //           this.matrix[i][j] += n;
// //         }
// //       }
// //     }
// //   }
// //   multiply(n) {
// //     console.log(n, "n Matrix");
// //     for (let i = 0; i < this.rows; i++) {
// //       for (let j = 0; j < this.cols; j++) {
// //         this.matrix[i][j] *= n;
// //       }
// //     }
// //   }

// //   multiplyMatrix(n) {
// //     // console.log(n, "n Matrix");
// //     if (n instanceof Matrix) {
// //       if (this.cols != n.rows) {
// //         console.log("Coloumn of A must match rows of B");
// //         return undefined;
// //       } else {
// //         // console.log("ok");
// //         let a = this;
// //         let b = n;
// //         console.table(a.matrix, b.matrix, "A");
// //         console.table(this.rows, n.cols, "B");
// //         let result = new Matrix(this.rows, n.cols);
// //         console.table(result, "res");
// //       }
// //     } else {
// //       for (let i = 0; i < this.rows; i++) {
// //         for (let j = 0; j < this.cols; j++) {
// //           this.matrix[i][j] *= n;
// //         }
// //       }
// //     }
// //   }
// // }
// function setup() {
//   createCanvas(400, 550);
// }

// function draw() {
//   background(0);
//   strokeWeight(2);
//   stroke(255);

//   // for (let i = 0; i <= width; i += 50) {
//   //   for (let y = 0; y <= height; y += 50) {
//   //     fill(random(255), 0, random(252));
//   //     ellipse(i, y, 25, 24);
//   //   }
//   // }  full Loop nested

//   // for (let i = 0; i <= width; i += 50) {
//   //   for (let y = 0; y <= height; y += 50) {
//   //     fill(random(255), 0, random(252));
//   //     ellipse(mouseX, mouseY, 25, 24);
//   //   }
//   // } animation loop mouse  move
//   // for (let y = 0; y <= height; y += 50) {
//   //   fill(random(255), 0, random(255));
//   //   ellipse(3, 200, 25, 25);
//   // }

//   for (let i = 0; i <= width; i += 50) {
//     for (let y = 0; y <= height; y += 50) {
//       fill(random(255), 0, random(252));
//       ellipse(i, 200, i - mouseX, width / 2 - mouseY);
//     }
//   }
// }

// // class Matrix {
// //   constructor(rows, cols) {
// //     this.rows = rows;
// //     this.cols = cols;

// //     this.matrix = [];

// //     for (let i = 0; i < this.rows; i++) {
// //       this.matrix[i] = [];
// //       for (let j = 0; j < this.cols; j++) {
// //         this.matrix[i][j] = 0;
// //       }
// //     }
// //   }
// //   randomize() {
// //     for (let x = 0; x < this.rows; x++) {
// //       for (let y = 0; y < this.cols; y++) {
// //         this.matrix[x][y] = Math.floor(Math.random() * 3);
// //       }
// //     }
// //   }
// //   add(n) {
// //     if (n instanceof Matrix) {
// //       for (let i = 0; i < this.rows; i++) {
// //         for (let j = 0; j < this.cols; j++) {
// //           this.matrix[i][j] += n.matrix[i][j];
// //         }
// //       }
// //     } else {
// //       for (let i = 0; i < this.rows; i++) {
// //         for (let j = 0; j < this.cols; j++) {
// //           this.matrix[i][j] += n;
// //         }
// //       }
// //     }
// //   }
// //   multiply(n) {
// //     console.log(n, "n Matrix");
// //     for (let i = 0; i < this.rows; i++) {
// //       for (let j = 0; j < this.cols; j++) {
// //         this.matrix[i][j] *= n;
// //       }
// //     }
// //   }

// //   multiplyMatrix(n) {
// //     // console.log(n, "n Matrix");
// //     if (n instanceof Matrix) {
// //       if (this.cols != n.rows) {
// //         console.log("Coloumn of A must match rows of B");
// //         return undefined;
// //       } else {
// //         // console.log("ok");
// //         let a = this;
// //         let b = n;
// //         console.table(a.matrix, b.matrix, "A");
// //         console.table(this.rows, n.cols, "B");
// //         let result = new Matrix(this.rows, n.cols);
// //         console.table(result, "res");
// //       }
// //     } else {
// //       for (let i = 0; i < this.rows; i++) {
// //         for (let j = 0; j < this.cols; j++) {
// //           this.matrix[i][j] *= n;
// //         }
// //       }
// //     }
// //   }
// // }
// let canvas;
// let newCanvas;
// function setup() {
//   canvas = createCanvas(800, 550);
//   newCanvas = createCanvas(300, 200);
// }

// function draw() {
//   canvas.background(200);
//   newCanvas.background(0);
// strokeWeight(2);
// stroke(255);

//   // for (let i = 0; i <= width; i += 50) {
//   //   for (let y = 0; y <= height; y += 50) {
//   //     fill(random(255), 0, random(252));
//   //     ellipse(i, y, 25, 24);
//   //   }
//   // }  full Loop nested

//   // for (let i = 0; i <= width; i += 50) {
//   //   for (let y = 0; y <= height; y += 50) {
//   //     fill(random(255), 0, random(252));
//   //     ellipse(mouseX, mouseY, 25, 24);
//   //   }
//   // } animation loop mouse  move
//   // for (let y = 0; y <= height; y += 50) {
//   //   fill(random(255), 0, random(255));
//   //   ellipse(3, 200, 25, 25);
//   // }

//   for (let i = 0; i <= width; i += 50) {
//     for (let y = 0; y <= height; y += 50) {
//       fill(random(255), 0, random(252));
//       ellipse(i, 200, i - mouseX, width / 2 - mouseY);
//     }
//   }
// }
var leftBuffer;
var rightBuffer;
let mobileNet;
let video;
var label = 0;
let classifier;
let cardButton;
let carButton;
let trainButton;
var imageCard = false;
var imagecar = false;
let glassButton;
var glass = false;
let classCard = 0;
let imageCar = 0;
let slider;
let predictor;
function modelReady() {
  console.log("model Ready");
}
function videoIsReady() {
  console.log("Video is Ready");

  // image(video, 0, 0, width, height);
}
let sliderValue = 0.5;
function setup() {
  // 800 x 400 (double width to make room for each "sub-canvas")

  createCanvas(800, 400);
  // Create both of your off-screen graphics buffers
  video = createCapture(VIDEO);
  mobileNet = ml5.featureExtractor("MobileNet", modelReady);
  classifier = mobileNet.classification(video, videoIsReady);
  predictor = mobileNet.regression(video, videoIsReady);

  leftBuffer = createGraphics(400, 400);
  rightBuffer = createGraphics(400, 400);

  slider = createSlider(0, 1, 0, 0.01);
  slider.input(function () {
    console.log(slider.value());
    sliderValue = sliderValue;
  });
  let sliderButton = createButton("Add Number");
  sliderButton.mousePressed(function () {
    console.log("ss");
    predictor.addImage(slider.value());
  });
  trainButton = createButton("train");
  trainButton.mousePressed(function () {
    predictor.train(isTrainingMechine);
  });
  slider.position(20, 80);
  sliderButton.position(160, 80);
  trainButton.position(270, 80);
}

function gotResults(error, res) {
  if (error) {
    console.log(error, "error");
  } else {
    console.log(res, "res");
    label = res.value;

    predictor.predict(gotResults);
  }
}
function isTrainingMechine(loss) {
  if (loss === null) {
    console.log("Training is Done");
    predictor.predict(gotResults);
  } else {
    console.log(loss);
  }
}
function draw() {
  // Draw on your buffers however you like
  drawLeftBuffer();
  drawRightBuffer();

  // video.hide();
  // Paint the off-screen buffers onto the main canvas

  // image(video, 120, 300);
  // image(rightBuffer, 400, 0);
}

// });

function drawLeftBuffer() {
  strokeWeight(2);
  stroke(255);
  for (let i = 0; i <= width; i += 10) {
    // for (let y = 0; y <= height; y += 80) {
    fill(random(255), 0, random(252));
    ellipse(i, 200, i - label * (width / sliderValue), width / 8 - label / 2);
    // }
  }

  // leftBuffer.fill(255, 255, 255);
  leftBuffer.textSize(32);
  leftBuffer.text("This is the left buffer!", 50, 50);
}

function drawRightBuffer() {
  rightBuffer.fill(0, 0, 0);
  rightBuffer.textSize(32);
  rightBuffer.text("This is the right buffer!", 50, 50);
}
