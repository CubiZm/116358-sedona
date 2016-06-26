  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {
        lat: 34.8543784,
        lng: -111.7951384
      }
    });

    var image = '../img/icon-map-marker.svg';
    var beachMarker = new google.maps.Marker({
      position: {
        lat: 34.8543784,
        lng: -111.7951384
      },
      map: map,
      icon: image
    });
  }
  google.maps.event.addDomListener(window, 'load', initMap);