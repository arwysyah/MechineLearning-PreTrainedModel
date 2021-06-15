let mobileNet;
let video;
var label;
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

//REGRESSION
// loss or cost  is the function  to  calculate the error
function modelReady() {
  console.log("model Ready");
}
function videoIsReady() {
  console.log("Video is Ready");

  // image(video, 0, 0, width, height);
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
function setup() {
  createCanvas(640, 500);
  video = createCapture(VIDEO);

  video.hide();
  background(0);
  mobileNet = ml5.featureExtractor("MobileNet", modelReady);
  classifier = mobileNet.classification(video, videoIsReady);
  predictor = mobileNet.regression(video, videoIsReady);

  slider = createSlider(0, 1, 0, 0.01);
  slider.input(function () {
    console.log(slider.value());
  });

  let sliderButton = createButton("Add Number");
  sliderButton.mousePressed(function () {
    predictor.addImage(slider.value());
  });

  // });

  trainButton = createButton("train");
  trainButton.mousePressed(function () {
    predictor.train(isTrainingMechine);
  });
}

function draw() {
  background(0);
  image(video, 0, 0);

  rectMode(CENTER);
  fill(255, 0, 100);
  rect(label * width, height / 2, 50, 50);
  fill(255);
  textSize(18);
  text(label, 10, height - 5);
}
