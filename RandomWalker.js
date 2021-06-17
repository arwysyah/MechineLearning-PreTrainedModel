function setup() {
  createCanvas(400, 400);
  video = new Walker();
  // video.size(320, 240);
  // video.hide();
  background(0);
}
// console.log(video);
function draw() {
  video.step();
  video.render();
}
