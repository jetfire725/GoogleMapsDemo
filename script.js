var myLatLng, options, map;

function initMap() {
    /// SETUP
    myLatLng = {lat: 35.908161, lng: -79.051970};
    options = {
        zoom: 17,
        center: myLatLng
    }
    map = new google.maps.Map(document.getElementById("map"), options)
    generateMarkers()
}

function generateMarkers() {
  markers = []
  // To create 10 markers nearby our original coordinates,
  for(var i =0; i < 10; i++) {
    // TODO: Create a latitude adjustment and longitude adjustment
    // that we will apply to our original coordinates

    // TODO: Create a 50% chance of making our latitude and longitude
    // adjustments negative
    if (randomNumber(2)) {

    }
    // TODO: Use these values to create a new set of coordinates that is slightly offset from our original coordinates
    let newLatLng = 
    // TODO: Create a marker at these new coordinates
    var marker = new google.maps.Marker({
      position: ,
      map: ,
      title:
    });
    // TODO: Add it to our set of markers
  }
}
/// Returns a random number from 0 to max -1.
function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
