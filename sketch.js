let mobileNet;
let video;
var label;
let classifier;

//REGRESSION
// loss or cost  is the function  to  calculate the error

//SCALAR = single number(0 dimension) ==> 5
//VECTOR = list of number (1 dimension) = [1,2,3,4,4]
//MATRIX = 2 dimension [[1,2,34]]
//TENSOR = all dimensions
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
}
function mousePressed() {
  const logits = mobileNet.infer(video);
  console.log(logits.dataSync());
  logits.print();
}

function draw() {
  image(video, 0, 0);
}
