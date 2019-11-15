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
        newLat = 1 - newLat
        newLong = 1 - newLong
      }
      otherLatLng.push({lat: myLatLng.lat+newLat, lng: myLatLng.lng+newLong})
    }
    console.log(otherLatLng)
    for(var i = 0; i < 10; i++) {
      var image =
      {
        url: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c325.png',
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      }
      var marker = new google.maps.Marker({
        position: otherLatLng[i],
        map: map,
        title: 'Pikachu',
        icon: image
      });
    }
}
