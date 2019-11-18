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


/* Given a set of coordinates, facilitates users to encapsulate a defined area as a Geofence. 
Provides functionality to determine cross section of coordinates to establish if a given 
coordinate falls within the Geofence. */

class Geofence {
    constructor() {

        /* Write a constructor to encapsulate paired coordinates of (latitude,longitude) as 
        the anchor points of the Geofence. Constructor should be able to take parameters of any 
        length. All parameters should be numbers. */

        // Encapsulate all coordinates where we could be passed any even number of coordinates
        this.coordinates = [];

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






