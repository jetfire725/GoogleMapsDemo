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
    console.log("Just Generated Markers. About to geofence.");

    let g = new Geofence(34.9076,-80.0518, 36.9076,-78.0518);
    console.log(g);
    console.log(g.isUserInGeofence(35.9076,-79.0518));

    if(g.isUserInGeofence(35.9076,-79.0518)) {
        alert("It's time to battle!");
    }
}

function generateMarkers(originalLatLng) {
  markers = []
  // To create 20 markers nearby our original coordinates,
  for(var i =0; i < 20; i++) {
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
    var marker = new google.maps.Marker({
      position: newLatLng,
      map: map,
      title: 'Pokemon',
    });
    // Add it to our set of markers
    markers.push(marker)
  }
}

/// Returns a random number from 0 to max -1.
function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max))
}


/* Given a set of coordinates, facilitates users to encapsulate a defined area as a Geofence.
Provides functionality to determine cross section of coordinates to establish if a given
coordinate falls within the Geofence. */

class Geofence {
    constructor() {

        /* Write a constructor to encapsulate paired coordinates of (latitude,longitude) as
        the anchor points of the Geofence. Constructor should be able to take parameters of any
        length. All parameters should be numbers. */

        // Encapsulate all coordinates where we could be passed any even number of coordinates
        this.coordinates = [...arguments];

        if(this.coordinates.length < 4) {
            throw "EXCEPTION! CANNOT CREATE GENFENCE WITHOUT AT LEAST 2 COORDINATE PAIRS";
        }


    }

    get getCoordinates(){
        // Getter for coordinates.
        return this.coordinates;
    }

    isUserInGeofence(givenLat, givenLon) {
        // function to determine if a given coordinate is within the coordinates of the Geofence.
        let isWithin = false;

        let latitudes = [];
        let longitudes = [];
        for(let i = 0; i < this.coordinates.length; i+=2) {
            latitudes.push(this.coordinates[i]);
            longitudes.push(this.coordinates[i+1]);
        }


        // How can we determine if something is within the fence?

        // Your Code Goes Here:
        
        




        return isWithin;
    }
}
