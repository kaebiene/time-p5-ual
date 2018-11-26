
function setup() {
  createCanvas( 600, 600 );
var url = 'https://transportapi.com/v3/uk/bus/stop/490000073V///timetable.json?app_id=ca103b63&app_key=8bc99f71886bd7095a865df6dcb5c46a&group=route'
loadJSON(url,gotData);

//console.log(loadJSON);

}
function gotData(data){
	//console.log(data);
	departures = data;
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
translate(100,190);
rotate(45);
text( sec, 0, 0);
pop();

// minute
// this creates a new drawing state
push();
// done in degrees
translate(0,140);
rotate(90);
textSize(150);
// replace with font name
textFont("Montserrat");
textStyle(BOLD);
text(m, 0, 0);
// this restores canvas to normal for another rotation
pop();

	//hour
push();
textSize(200);
textFont("Montserrat");
textStyle(BOLD);
fill('#B7990D');
text( h, 6, 145 );
stroke('black');
strokeWeight(3);
fill(0, 0);
text( h, 0, 140 );

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

if (weather) {
push();
textSize(100);
textFont("Montserrat");
textStyle(BOLD);
text(departures[2].departures.12.aimed_departure_time, 300, 300);
pop();
}


}
