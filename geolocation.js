
let arrayOfGeofences = [];
let arrayOfGeofenceArgumentClicks = [];
class Geofence {
    constructor() {

        // Generalize constructor to also take in a single array? Useful for onclick?

        if(arguments.length < 4) {
            // error
            // check if 1st arg is an array:
            if(Array.isArray(arg[0])) {
                // parse array. 
                this.arguments = [...arguments[0]];
            } else {
                throw "ERROR. CANNOT CREATE GENFENCE WITHOUT AT LEAST 2 COORDINATES";
            }
            
        }

        this.coordinates = [...arguments]; // stores copy of passed in arguments. Important for referencing later.
        

        
        
        
    }

    get getCoordinates(){
        return this.coordinates;
    }

    isUserInGeofence(givenLat, givenLon) {
        // function to determine if a given coordinate is within the coordinates of the Geofence.
        // check if range is undefined:
        let latitudes = [];
        let longitudes = [];
        for(let i = 0; i < this.coordinates.length; i+=2) {
            latitudes.push(this.coordinates[i]);
            longitudes.push(this.coordinates[i+1]);
        }

        // Something is within the fence if the coordinates are between the min and max latitude and longitude.
        
        // find min lat and lon. Find max lat and lon. Check if given values are within those ranges.
        let minLat = Math.min(latitudes);
        let maxLat = Math.max(latitudes);
        let minLon = Math.min(longitudes);
        let maxLon = Math.max(longitudes);

        if(givenLat >= minLat && givenLat <= maxLat && givenLon >= minLon && givenLon <= maxLon) {
            return true;
        } 
        return false;


        
    }
}


async function initMap() {
    let wilsonHall = {lat: 35.9076, lng: -79.0518};
    

    let map = await new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: wilsonHall
    });

    // write function to construct geofence from onClick?
    google.maps.event.addListener(map, "click", function (event) {
        let latitude = event.latLng.lat();
        let longitude = event.latLng.lng();
        console.log( latitude + ', ' + longitude );
        arrayOfGeofenceArgumentClicks.push(latitude);
        arrayOfGeofenceArgumentClicks.push(longitude);

    }); //end addListener

    let marker = new google.maps.Marker({
        position: wilsonHall,
        map: map,
        title: 'Our Classroom!' 
    });

    let g;
    try{
        g = new Geofence(10,10, 10, 20); 
    } catch(e) {
        console.log(e);
        g = new Geofence(90, 90, 0,0);
    }
    arrayOfGeofences.push(g);
    
    console.log(g.coordinates); 
}



