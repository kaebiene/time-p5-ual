var transportapi

function preload() {
  var url = 'https://transportapi.com/v3/uk/bus/stop/490000073V///timetable.json?app_id=ca103b63&app_key=8bc99f71886bd7095a865df6dcb5c46a&group=route'
  loadJSON(url,gotData);
  loadJSON(url2,gotData2);
}


function setup() {
  createCanvas( 800, 800 );
//var url = 'https://transportapi.com/v3/uk/bus/stop/490000073V///timetable.json?app_id=ca103b63&app_key=8bc99f71886bd7095a865df6dcb5c46a&group=route'
//loadJSON(url,gotData);

//console.log(loadJSON);

}

function gotData(data){
	//console.log(data);
	transportapi = data;
}

//function gotWeather(weather) {

  // Get the temp
  //var temp = Number(weather.current.temp_c);

//}

function draw(){
//var temp = weather.current.temp_c;
var h = hour();
var m = minute();
var sec = second();
var d = day();
background(255,255,255);
angleMode(DEGREES);

//second
push();
textSize(100);
textFont("Montserrat");
textStyle(BOLD);
translate(100,300);
rotate(45);
text( sec, 0, 0);
pop();

// minute
// this creates a new drawing state
push();
// done in degrees
translate(0,280);
rotate(90);
textSize(150);
// replace with font name
textFont("Montserrat");
textStyle(BOLD);
fill('blue');
text(m, 0, 0);
// this restores canvas to normal for another rotation
pop();

	//hour
push();
textSize(400);
textFont("Montserrat");
textStyle(BOLD);
fill('black');
text( h, 6, 280 );
//stroke('black');
//strokeWeight(3);
//fill(0, 0);
//text( h, 0, 140 );

pop();

//push();
//pop();
push();
// done in degrees
translate(300,200);
rotate(0);
textSize(150);
// replace with font name
textFont("Montserrat");
textStyle(BOLD);
text('', 0, 0);
// this restores canvas to normal for another rotation
pop();


push();
textSize(100);
textFont("Montserrat");
textStyle(BOLD);
text(transportapi.departures["12"][0].aimed_departure_time, 300, 300);

pop();
push();
textSize(50);
textFont("Montserrat");
textFont(BOLD);
//text(data[3].departures.12.line_name,300,300);
pop();

push();
textSize(50);
textFont("Montserrat");
textFont(BOLD);
text('t  r  a  n  s  p  o  r  t ',300,300);
pop();



}
