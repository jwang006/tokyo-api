
//From: https://api.openaq.org
//tokyo - pm api

let pm25;
let y = 100;
let x = 10;
let xx;

let loading = true;
let url = "https://api.openaq.org/v2/measurements?location_id=275642&parameter=pm25&date_from=2023-02-25T00:00:00Z&date_to=2023-02-26T00:00:00Z&limit=1000";

let myData = []; 
let count = 0; 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  // createCanvas(500, 500);
  var cnv = createCanvas(500, 500);
  cnv.style('display', 'block');
  background(200,200);
  // perform request
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log("Got data");
    //console.log(data);
    pm25 = data;
    loading = false;
     
  
  }).catch(function(err) {
    console.log(`Something went wrong: ${err}`);
  });
}

function draw() {
  textAlign(CENTER);
  fill(0);

  if (loading) {
    // loading screen
    textSize(30);
    text("Loading... if it didn't work, please refreash the web", 0, height/2-25, width, 50);
    
  }else{
    
    for (let i = 0; i < pm25.results.length -1; i++) { 
   
        let pm25Value = pm25.results[i].value;
        let intValue = pm25Value * 10;
        let ValueRange = floor(map (intValue,0,60,0,400));
        x ++;
        xx = map (x,0,196,0,450);
        strokeWeight (5);
        point (xx,ValueRange);
        textSize(20);
        textStyle(BOLD);
        text(pm25.results[1].location + "  " + pm25.results[1].parameter, width/2, 450);
    }
  }
  noLoop();
}


