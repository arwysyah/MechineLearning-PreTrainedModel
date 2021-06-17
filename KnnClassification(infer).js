let mobileNet;
let video;
let knn;
let labels;
let ready;

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
  // video.size(320, 240);
  video.hide();
  background(0);
  mobileNet = ml5.featureExtractor("MobileNet", modelReady);
  knn = ml5.KNNClassifier();
  labels = createP("Kamu Butuh Melatih Komputer");
  // if (labels === "right") {
  //   labels = "Kamu di Kanan";
  // } else if (labels === "left") {
  //   labels = "Kamu di Kiri";
  // } else {
  //   labels = "Kamu Di Tengah";
  // }
}
// function mousePressed() {
//   const logits = mobileNet.infer(video);
//   console.log(logits.dataSync());
//   logits.print();
// }

function goClassify() {
  const logits = mobileNet.infer(video);
  knn.classify(logits, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      labels.html(res.label);
      console.log(res);
      goClassify();
    }
  });
}
// function mousePressed() {
//   const logits = mobileNet.infer(video);
//   if (knn.getNumLabels() > 0) {
//     knn.classify(logits, getResult);
//   }
// }
function keyPressed() {
  const logits = mobileNet.infer(video);
  if (keyCode === LEFT_ARROW) {
    console.log("left");
    knn.addExample(logits, "Kamu Di Kiri");
  } else if (keyCode == RIGHT_ARROW) {
    console.log("right");
    knn.addExample(logits, "Kamu Di Kanan");
  } else {
    knn.addExample(logits, "Kamu Di Tengah ");
  }
}

function draw() {
  image(video, 0, 0);
  if (!ready && knn.getNumLabels() > 0) {
    goClassify();
    ready = true;
  }
}
