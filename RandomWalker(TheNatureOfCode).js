function Walker() {
  this.x = width / 2;
  this.y = height / 2;
  let x = this.x;
  let y = this.y;
  this.render = function () {
    stroke("green"); // Change the color
    strokeWeight(1);
    point(x, y);
    // ellipse(x, y, 10);
  };
  this.step = function () {
    let choice = floor(random(4));
    console.log(choice);

    if (choice === 0) {
      x++;
    } else if (choice === 1) {
      x--;
    } else if (choice == 2) {
      y++;
    } else {
      y--;
    }
    x = constrain(x, 0, width - 1);
    y = constrain(y, 0, height - 1);
  };
}
