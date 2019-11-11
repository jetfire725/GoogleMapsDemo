function initMap(){
    let options = {
        zoom: 6,
        center: {lat: 35, lng: -79}
    }

    let map = new google.maps.Map(document.getElementById("map"), options)
}