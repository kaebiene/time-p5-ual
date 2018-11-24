var data;

function preload(){
	data = loadJSON("./data/stgeorgesroad.json", function( json ){
		data = [];
		for( var key in json ){
			data.push( json[key] );
		}
	});
}

function setup(){
	createCanvas( 800, 600 );
	console.log( data[0].steps );
	console.log( data[5].steps );
	console.log( data[10].buses );
	// values that include spaces have to be wrapped with [] and ""
	console.log( data[2]["photo brightness"] );
	console.log( data[2].steps );
	console.log( data[14]["feeling name"] );
	// accesses the steps of every minute in the json
	// i++ is adding 1 to i (variable)
	// made of a value, condition and iteration
	for( var i = 0; i < data.length; i++ ){
		console.log( data[i].steps);
	}
}

function draw(){
background( 255);
noFill();
//textSize(200);
//var randy = random(255);
//fill(randy);
//text(data[1].steps, 200, 200);
for( var i = 0; i < data.length; i++){
	ellipse( width/2, height/2, data[i]["photo brightness"] );
}
}
