let mobileNet;
let video;
let knn;

// KEY NEAREST NEIGHBOUR
//REGRESSION
// loss or cost  is the function  to  calculate the error

// K = how many nearest neighbour than want to looking for

//SCALAR = single number(0 dimension) ==> 5
//VECTOR = list of number (1 dimension) = [1,2,3,4,4]
//MATRIX = 2 dimension [[1,2,34]]
//TENSOR = all dimensions

// feature featureExtractor does "infer " from image will give us a thousand number of
function modelReady() {
  console.log("model Ready");
}

function setup() {
  createCanvas(640, 500);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  background(0);
  mobileNet = ml5.featureExtractor("MobileNet", modelReady);
  knn = ml5.KNNClassifier();
}
// function mousePressed() {
//   const logits = mobileNet.infer(video);
//   console.log(logits.dataSync());
//   logits.print();
// }

function getResult(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
}
function mousePressed() {
  const logits = mobileNet.infer(video);
  if (knn.getNumLabels() > 0) {
    knn.classify(logits, getResult);
  }
}
function keyPressed() {
  const logits = mobileNet.infer(video);
  if (keyCode === LEFT_ARROW) {
    console.log("left");
    knn.addExample(logits, "left");
  } else {
    console.log("right");
    knn.addExample(logits, "left");
  }
  knn.addExample(logits, "right");
}

function draw() {
  image(video, 0, 0);
}
