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

//CLASSIFICATION
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
    label = res[0].label;

    classifier.classify(gotResults);
  }
}
function isTrainingMechine(loss) {
  if (loss === null) {
    console.log("Training is Done");
    classifier.classify(gotResults);
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
  cardButton = createButton("card");
  cardButton.mousePressed(function () {
    classifier.addImage("card");
    classCard++;
    console.log(classCard);
    imageCard = true;
  });
  glassButton = createButton("glassButton");
  glassButton.mousePressed(function () {
    let i = classifier.addImage("glass");
    console.log(i);
    imageCard++;
    glass = true;
  });

  // carButton = createButton("smartPhone");
  // carButton.mousePressed(function () {
  //   let i = classifier.addImage("smartPhone");
  //   console.log(i);

  //   imagecar = true;
  // });

  trainButton = createButton("train");
  trainButton.mousePressed(function () {
    if (classCard > 8 && imageCard > 8) {
      classifier.train(isTrainingMechine);
    }

    // else if (imageCard === true && imagecar == false) {
    //   classifier.train(isTrainingMechine);
    // } else if (imageCard === false && imagecar == true) {
    //   classifier.train(isTrainingMechine);
    // }
    else {
      alert("You need to add it more than 8 times");
    }
  });
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(18);
  text(label, 10, height - 5);
}
