var map, markers;
async function initMap() {
    let wilsonHall = {lat: 35.908161, lng: -79.051970};


    map = await new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: wilsonHall
    });


    let marker = new google.maps.Marker({
        position: wilsonHall,
        map: map,
        title: 'Our Classroom!'
    });

    generateMarkers(wilsonHall)
}

function generateMarkers(originalLatLng) {
  markers = []
  // To create 20 markers nearby our original coordinates,
  for(let i =0; i < 20; i++) {
    // Create a latitude adjustment and longitude adjustment
    // that we will apply to our original coordinates
    latitudeAdjustment = randomNumber(10)/10000
    longitudeAdjustment = randomNumber(10)/10000
    // Create a 50% chance of making our latitude and longitude
    // adjustments negative
    if (randomNumber(2)) {
      latitudeAdjustment = 0 - latitudeAdjustment
      longitudeAdjustment = 0 - longitudeAdjustment
    }
    // Use these values to create a new set of coordinates that is slightly offset from our original coordinates
    let newLatLng = {lat: originalLatLng.lat+latitudeAdjustment, lng: originalLatLng.lng+longitudeAdjustment}
    // Create a marker at these new coordinates
    let marker = new google.maps.Marker({
      position: newLatLng,
      map: map,
      title: 'Pokemon',
    });
    // Add it to our set of markers
    markers.push(marker)
  }
}

/// Returns a random number from 0 to max-1.
function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
