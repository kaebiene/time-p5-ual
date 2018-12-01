var transportapi
var img1

function preload() {
  var url = 'https://transportapi.com/v3/uk/bus/stop/490000073V///timetable.json?app_id=ca103b63&app_key=8bc99f71886bd7095a865df6dcb5c46a&group=route'
  loadJSON(url, gotData);
  loadJSON(url2, gotData2);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  var nowtime = hour() + ":" + minute()
  var busespassed = 0
  console.log(nowtime);
  console.log(busespassed);
  img1 = loadImage("assets/gradient1.png");
  //var url = 'https://transportapi.com/v3/uk/bus/stop/490000073V///timetable.json?app_id=ca103b63&app_key=8bc99f71886bd7095a865df6dcb5c46a&group=route'
  //loadJSON(url,gotData);

  //console.log(loadJSON);

}

function gotData(data) {
  //console.log(data);
  transportapi = data;
}

//function gotWeather(weather) {

// Get the temp
//var temp = Number(weather.current.temp_c);

//}

function draw() {
  var h = hour();
  var m = minute();
  var sec = second();
  var d = day();
  background(255, 255, 255);
  angleMode(DEGREES);

  // this is how i am going to count the number of buses
  if ('nowtime' == transportapi.departures["12"][0].aimed_departure_time) {
    busespassed + 1
  }

  textFont('Rubik');
  //second
  push();
  textFont('Rubik');
  colorMode(HSL);
  //fill(100, 100, 100);
  textSize(100);
  textStyle(BOLD);
  translate(100, 300);
  rotate(45);
  //text( sec, 0, 0);
  pop();

  // minute
  // this creates a new drawing state
  push();
  // done in degrees
  translate(0, 280);
  rotate(90);
  textSize(150);
  // replace with font name
  textStyle(BOLD);
  fill('blue');
  //text(m, 0, 0);
  // this restores canvas to normal for another rotation
  pop();

  //hour
  push();
  textSize(400);
  textStyle(BOLD);
  fill('black');
  //text( h, 6, 280 );
  //stroke('black');
  //strokeWeight(3);
  //fill(0, 0);
  //text( h, 0, 140 );

  pop();

  //push();
  //pop();
  push();
  // done in degrees
  translate(300, 200);
  rotate(0);
  textSize(150);
  // replace with font name
  textStyle(BOLD);
  //text('', 0, 0);
  //text(transportapi.departures["12"][0].aimed_departure_time, 10, 160);
  // this restores canvas to normal for another rotation
  pop();


  push();
  textSize(200);
  textStyle(BOLD);
  colorMode(HSL);
  fill(0, 0, 50);
  text(transportapi.departures["12"][0].aimed_departure_time, 10, 160);
  fill(0, 0, 30);
  text(transportapi.departures["12"][1].aimed_departure_time, 10, 340);
  blendMode(REPLACE)
  fill(0, 0, 10);
  text(transportapi.departures["12"][2].aimed_departure_time, 10, 540);
  image(img1, 0, 400, width, 200);
  blendMode(BLEND)
  pop();


  push();
  translate(570,20);
  rotate(90);
  textSize(200);
  textStyle(BOLD);
  textFont('Rubik');
  fill('red');
  text(transportapi.departures["12"][0].line,0,0);
  translate(0,-200);
  rotate(0);
  textStyle(NORMAL)
  text('BUS',0,0);
  pop();

  push();
  textSize(50);
  textStyle(BOLD);
  translate(600,900);
  rotate(270);
  text(transportapi.stop_name,0,0);
  pop();

}
