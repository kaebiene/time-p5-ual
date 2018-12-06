var transportapi
var img1
var pg
var stretch
var busespassed
var busespassed = 0
var previoustime
//var nowtime = hour() + ":" + minute()

function preload() {
  loadData();
  //loadJSON(url2, gotData2);
}



function populateStorage() {
  console.log('populateStorage')
  localStorage.setItem('busespassed', busespassed);

  getBusValue();
}

function getBusValue() {
  console.log('getBusValue')
  busespassed = localStorage.getItem('busespassed');
  busespassed = float(busespassed);
}

function loadData(){
  console.log('loadData');
  var url = 'https://transportapi.com/v3/uk/bus/stop/490000073V///timetable.json?app_id=ca103b63&app_key=8bc99f71886bd7095a865df6dcb5c46a&group=route'
  var url2 = 'https://transportapi.com/v3/uk/train/station/EPH/live.json?app_id=ca103b63&app_key=8bc99f71886bd7095a865df6dcb5c46a&darwin=false&train_status=passenger'
  loadJSON(url, gotData);
  loadJSON(url2, gotTrainData);
}



function setup() {
  if(!localStorage.getItem('busespassed')) {
    populateStorage();
  } else {
    getBusValue();
  }
  createCanvas(windowWidth, windowHeight);
  //var nowtime = hour() + ":" + minute()
  //var busespassed = 0

  console.log(busespassed);
  img1 = loadImage("assets/gradient1.png");
  bus12 = loadImage("assets/12BUSB.png");
  //var url = 'https://transportapi.com/v3/uk/bus/stop/490000073V///timetable.json?app_id=ca103b63&app_key=8bc99f71886bd7095a865df6dcb5c46a&group=route'
  //loadJSON(url,gotData);

  console.log(transportapi.departures["12"][0].line);
  stretch = createGraphics(width,200);
  // this refreshes the data after a bit
  setInterval(loadData, 60000);
  setInterval(populateStorage, 60000)

}

function gotData(data) {
  //console.log(data);
  transportapi = data;
  var nowtime = hour() + ":" + nf(minute(),2,0);
  if (nowtime === transportapi.departures["12"][0].aimed_departure_time) {
    busespassed = busespassed + 1
  }
  if (nowtime === transportapi.departures["12"][1].aimed_departure_time) {
    busespassed = busespassed + 1
  }
  if (nowtime === transportapi.departures["12"][2].aimed_departure_time) {
    busespassed = busespassed + 1
  }
  console.log(nowtime);
}

function gotTrainData(data) {
  trainData = data
  var nowtime = hour() + ":" + nf(minute(),2,0);
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
  pg = createGraphics(width*2,450);
  //var nowtime = hour() + ":" + minute()

  background(255, 255, 255);
  angleMode(DEGREES);

  // this is how i am going to count the number of buses
  // busespassed is necessary
  //if (nowtime !== previoustime) {

  //if (nowtime === transportapi.departures["12"][0].aimed_departure_time) {
  //  busespassed = busespassed + 1
//  }
  //if (nowtime === transportapi.departures["12"][1].aimed_departure_time) {
  //  busespassed = busespassed + 1
  //}
  //if (nowtime === transportapi.departures["12"][2].aimed_departure_time) {
  //  busespassed = busespassed + 1
//  }
//}
  textFont('Rubik');
  //second
  push();
  fill('#FAB603');
  noStroke();
  ellipse(1200,0,1000);
  rect(50,200,500,100);
  pop();

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
  //text(transportapi.departures["12"][0].aimed_departure_time, 10, 160);
  fill(0, 0, 30);
  //text(transportapi.departures["12"][1].aimed_departure_time, 10, 340);
  fill(0, 0, 10);
  //text(transportapi.departures["12"][2].aimed_departure_time, 10, 540);
  //image(img1, 0, 400, width, 200);
  //text(busespassed,10, 160, 50);
  textSize(100)
  textLeading(80)
  //noFill();
  //fill('#3023AE')
  //strokeWeight(2);
  //stroke('black')
  fill('black')
  text('buses passed',10,250, 50);
  pop();


  push();
  pg.clear();
  //pg.translate(600,20);
  //pg.angleMode(DEGREES)
  //pg.rotate(90);
  pg.smooth();
  pg.textSize(200);
  pg.textStyle(BOLD);
  pg.textFont('Rubik');
  pg.fill('#FAB603');
  //pg.text(transportapi.departures["12"][0].line,0,0);
  pg.text(busespassed,10, 160, 50);
  //pg.text('BUS',0,-180);
  image(bus12,350,0,474/1.8,854/1.8);
  //filter(GRAY)
  //pg.rect(0,0,width,width);
  image(pg,0,0);
  //translate(570,20);
  //rotate(90);
  textSize(200);
  textStyle(BOLD);
  textFont('Rubik');
  fill('black');
  //img1.mask(pg);
  //image(img1, 0, 0, width*2,400);
  translate(760,20);
  rotate(90);
  textStyle(NORMAL)
  //text('BUS',0,0);
  pop();



  push();
  textSize(50);
  textStyle(BOLD);
  translate(600,50);
  rotate(0);
  fill('black')
  text(transportapi.stop_name,0,0,100);
  pop();

  //previoustime = nowtime
}
