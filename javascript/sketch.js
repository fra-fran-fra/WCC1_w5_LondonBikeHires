//DAILY BIKE HIRES IN LONDON

//Total number of hires of the Santander Cycle Hire Scheme, by day, month and year
//Data for each day since the launch on 30 July 2010
//Source: https://data.london.gov.uk/dataset/number-bicycle-hires

//Author: Francesco Angelini
//Date: 08/11/2022

let bikeHires;
let hireDates;
let currIdx = 0;

function preload() {
  // bikeHires = loadStrings("myTfl.txt");
  bikeHires = loadStrings("data/myTfl.txt");
  hireDates = loadStrings("data/myTflDates.txt");
}

function setup() {
  createCanvas(700, 600);
  textAlign(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220, 60);

  /// READ ARRAY /// VISUALISE STATS ///

  fill(0);
  textStyle(NORMAL);

  // TITLE
  textSize(40);
  text("DAILY BIKE HIRES in LONDON", width * 0.5, height * 0.09);
  textSize(15);
  text(
    "https://data.london.gov.uk/dataset/number-bicycle-hires",
    width * 0.5,
    height * 0.15
  );

  // COLUMNS
  textSize(15);
  text("x10k", width * 0.1, height * 0.85);
  text("x1k", width * 0.3, height * 0.85);
  text("x100", width * 0.5, height * 0.85);
  text("x10", width * 0.7, height * 0.85);
  text("x1", width * 0.9, height * 0.85);

  // DATA
  textSize(25);
  text(bikeHires[currIdx], width * 0.5, height * 0.93);
  textSize(15);
  text(hireDates[currIdx], width * 0.5, height * 0.97);

  //animation speed
  if (frameCount % 25 == 0) {
    currIdx++;
  }

  //reset array
  if (currIdx >= bikeHires.length) {
    currIdx = 0;
  }

  /// GET INDIVIDUAL DIGITS ///

  let IOOOO = floor(bikeHires[currIdx] / 10000);

  let IOOO = floor((bikeHires[currIdx] % 10000) / 1000);
  if (IOOO >= 10) {
    IOOO = IOOO - 10;
  }

  let IOO = floor((bikeHires[currIdx] % 1000) / 100);
  if (IOO >= 10) {
    IOO = IOO - 10;
  }

  let IO = floor((bikeHires[currIdx] % 100) / 10);
  if (IO >= 10) {
    IO = IO - 10;
  }

  let O = floor(bikeHires[currIdx] % 10);
  if (O >= 10) {
    O = O - 10;
  }

  /// DRAWING /// DRAWING /// DRAWING ///

  push();

  //first digit
  for (i1 = 0; i1 < O; i1++) {
    push();

    translate(width * 0.8, height * 0.85);
    scale(0.2, -0.2);
    bikeDrawing(0, i1 * 200);

    pop();
  }

  //second digit
  for (i2 = 0; i2 < IO; i2++) {
    push();

    translate(width * 0.6, height * 0.85);
    scale(0.2, -0.2);
    bikeDrawing(0, i2 * 200);

    pop();
  }

  //third digit
  for (i3 = 0; i3 < IOO; i3++) {
    push();

    translate(width * 0.4, height * 0.85);
    scale(0.2, -0.2);
    bikeDrawing(0, i3 * 200);

    pop();
  }

  //fourth digit
  for (i4 = 0; i4 < IOOO; i4++) {
    push();

    translate(width * 0.2, height * 0.85);
    scale(0.2, -0.2);
    bikeDrawing(0, i4 * 200);

    pop();
  }

  //fifth digit
  for (i5 = 0; i5 < IOOOO; i5++) {
    push();

    translate(width * 0.00000001, height * 0.85);
    scale(0.2, -0.2);
    bikeDrawing(0, i5 * 200);

    pop();
  }
  pop();

  /// FUNCTION TO DRAW BIKE ///

  function bikeDrawing(transX, transY) {
    noFill();

    push();

    translate(transX, transY);

    //to draw columns from the bottom going upwards
    translate(width, height);
    rotate(180);

    // WHEELS
    strokeWeight(5);
    ellipse(width * 0.25, height * 0.66, 175, 175);
    ellipse(width * 0.75, height * 0.66, 175, 175);

    // SADDLE & HANDLEBARS
    strokeWeight(10);
    line(width * 0.28, height * 0.4, width * 0.34, height * 0.4);
    line(width * 0.66, height * 0.4, width * 0.7, height * 0.4);

    // FRAME
    strokeWeight(3);
    beginShape();
    vertex(width * 0.25, height * 0.66);
    vertex(width * 0.42, height * 0.66);
    vertex(width * 0.67, height * 0.45);
    vertex(width * 0.33, height * 0.45);
    endShape(CLOSE);

    line(width * 0.75, height * 0.66, width * 0.66, height * 0.4);
    line(width * 0.42, height * 0.66, width * 0.31, height * 0.4);

    pop();
  }
}
