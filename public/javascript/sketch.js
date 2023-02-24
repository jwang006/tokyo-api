
//From: https://api.openaq.org
let airData;
let loading = true;
let url = "https://api.openaq.org/v2/measurements?location_id=275642&parameter=um025&parameter=um100&parameter=um010&parameter=pm10&parameter=pm1&parameter=pm25&date_from=2023-02-11T00:00:00Z&date_to=2023-02-18T00:00:00Z&limit=1000";

function setup() {
  createCanvas(500, 500);

 
  // perform request
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log("Got data");
    console.log(data);
    //HAVE YOU TURNED OFF AUTO-REFRESH?
    
    airData = data;
    loading = false;
     
  
  }).catch(function(err) {
    console.log(`Something went wrong: ${err}`);
  });
}

function draw() {
  textAlign(CENTER);
  background(250);

  fill(0);

  if (loading) {
    // loading screen
    textSize(30);
    text("Loading...", 0, height/2-25, width, 50);
    
  }else{
    
    //display using the simple line-graph code


  }

}

