function initMap(){
    let options = {
        zoom: 17,
        center: {lat: 35.9076, lng: -79.0518}
    }

    let map = new google.maps.Map(document.getElementById("map"), options)
}