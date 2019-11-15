function initMap() {
    var myLatLng = {lat: 35.908161, lng: -79.051970};
    let options = {
        zoom: 17,
        center: myLatLng
    }
    let map = new google.maps.Map(document.getElementById("map"), options)
    otherLatLng = []
    for(var i =0; i < 10; i++) {
      negative = Math.floor(Math.random() * Math.floor(2))
      newLat = Math.floor(Math.random() * Math.floor(10))/10000
      newLong = Math.floor(Math.random() * Math.floor(10))/10000
      if (negative) {
        newLat = 0 - newLat
        newLong = 0 - newLong
      }
      otherLatLng.push({lat: myLatLng.lat+newLat, lng: myLatLng.lng+newLong})
    }
    console.log(otherLatLng)
}
