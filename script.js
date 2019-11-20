var map, markers;
async function initMap() {
    let wilsonHall = {lat: 35.908161, lng: -79.051970};


    map = await new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: wilsonHall
    });


    let marker = new google.maps.Marker({
        position: undefined,
        map: undefined,
        title: undefined
    });

    generateMarkers(wilsonHall)
}

function generateMarkers(originalLatLng) {
  markers = []
  // To create 20 markers nearby our original coordinates,
  for(let i =0; i < 20; i++) {
    // TODO: Create a latitude adjustment and longitude adjustment
    // that we will apply to our original coordinates
    latitudeAdjustment = undefined
    longitudeAdjustment = undefined
    // TODO: Create a 50% chance of making our latitude and longitude
    // adjustments negative
    if (randomNumber(2) == 1) {
      latitudeAdjustment = undefined
      longitudeAdjustment = undefined
    }
    // TODO: Use these values to create a new set of coordinates that is slightly offset from our original coordinates
    let newLatLng = undefined
    // TODO: Create a marker at these new coordinates
    let marker = new google.maps.Marker({
      position: undefined,
      map: undefined,
      title: undefined
    });
    // TODO: Add it to our set of markers
  }
}
/// Returns a random number from 0 to max-1.
function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
