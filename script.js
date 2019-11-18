var map;

// finding random pokemon 
function generateMarkers(myLatLng) {
    markers = []
        // To create 10 markers nearby our original coordinates,
    for (var i = 0; i < 10; i++) {
        // Create a latitude adjustment and longitude adjustment
        // that we will apply to our original coordinates
        latitudeAdjustment = randomNumber(10) / 100000
        longitudeAdjustment = randomNumber(10) / 100000
            // Create a 50% chance of making our latitude and longitude
            // adjustments negative
        if (randomNumber(2)) {
            latitudeAdjustment = 0 - latitudeAdjustment
            longitudeAdjustment = 0 - longitudeAdjustment
        }
        // Use these values to create a new set of coordinates that is slightly offset from our original coordinates
        let newLatLng = { lat: myLatLng.lat + latitudeAdjustment, lng: myLatLng.lng + longitudeAdjustment }


        // Create a marker at these new coordinates

        // ****************
        // FIND IMAGE HERE
        // ****************

        var marker = new google.maps.Marker({
            position: newLatLng,
            map: map,
            title: 'Pokemon',
            // ****************
            // ADD IMAGE TO MARKER HERE
            // ****************
        });
        // Add it to our set of markers
        markers.push(marker)
    }
}

/// Returns a random number from 0 to max -1.
function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max))
}


// creating a geofence to represent a gym
class Geofence {
    constructor() {

        // Generalize constructor to also take in a single array? Useful for onclick?

        if (arguments.length < 4) {
            throw "ERROR. CANNOT CREATE GEOFENCE WITHOUT AT LEAST 2 COORDINATES";
        }

        this.coordinates = [...arguments]; // stores copy of passed in arguments. Important for referencing later.
    }

    get getCoordinates() {
        return this.coordinates;
    }

    drawGeofence() {
        // *******************************
        // ADD CODE TO DRAW GEOFENCE HERE
        // *******************************
    }

    isUserInGeofence(givenLat, givenLon) {
        // function to determine if a given coordinate is within the coordinates of the Geofence.
        // check if range is undefined:
        let isWithin = true;
        let latitudes = [];
        let longitudes = [];
        for (let i = 0; i < this.coordinates.length; i += 2) {
            latitudes.push(this.coordinates[i]);
            longitudes.push(this.coordinates[i + 1]);
        }

        // Something is within the fence if the coordinates are between the min and max latitude and longitude.

        // find min lat and lon. Find max lat and lon. Check if given values are within those ranges.
        let minLat = Math.min(...latitudes);
        let maxLat = Math.max(...latitudes);
        let minLon = Math.min(...longitudes);
        let maxLon = Math.max(...longitudes);

        if (givenLat >= minLat && givenLat <= maxLat && givenLon >= minLon && givenLon <= maxLon) {
            isWithin = true;
        }
        return isWithin;

    }
}

// creates map
async function initMap() {
    let wilsonHall = { lat: 35.9076, lng: -79.0518 };


    map = await new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: wilsonHall
    });

    let marker = new google.maps.Marker({
        position: wilsonHall,
        map: map,
        title: 'Our Classroom!'
    });

    generateMarkers(wilsonHall);
    
    let g;
    try {
        g = new Geofence(34.9076, -80.0518, 36.9076, -78.0518);
        // ****************
        // CALL DRAW GEOFENCE METHOD
        // ****************

        // c = new Geofence(35.908342, -79.052368, 35.908291, -79.051596, 35.907447, -79.051591, 35.907873, -79.052567, 35.908342, -79.052368);
        // c.drawGeofence();
    } catch (e) {
        console.log(e);
    }


    if(g.isUserInGeofence(35.9076, -79.0518)) {
        alert("Gotta Catch 'Em All!");
    }
}
