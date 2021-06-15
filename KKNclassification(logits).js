let mobileNet;
let video;
var label;
let classifier;
// KKN classification
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
