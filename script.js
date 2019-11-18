var map;
async function initMap() {
    let wilsonHall = {lat: 35.9076, lng: -79.0518};
    

    map = await new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: wilsonHall
    });


    let marker = new google.maps.Marker({
        position: wilsonHall,
        map: map,
        title: 'Our Classroom!' 
    });

    
    let g = new Geofence(34.9076,-80.0518, 36.9076,-78.0518,); 
    
    if(g.isUserInGeofence(35.9076,-79.0518)) {
        alert("It's time to battle!");
    }
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






