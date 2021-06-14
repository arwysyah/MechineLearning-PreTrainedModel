let mobileNet;
let video;
var label;
let detector;
function preload() {
  img = loadImage("./images/cats.jpg");
  detector = ml5.objectDetector("cocossd");
}

function getResults(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res, "res");
    for (let i = 0; i < res.length; i++) {
      let obj = res[i];
      stroke(0, 255, 0); //
      strokeWeight(4);
      noFill();
      rect(obj.x, obj.y, obj.width, obj.height);
      textSize(24);
      fill(0);
      text(obj.label, obj.x, obj.y);
    }
  }
}
function setup() {
  createCanvas(640, 600);
  console.log(img);
  image(img, 0, 0);

  detector.detect(img, getResults);
}
