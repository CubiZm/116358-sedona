var menuToggler = document.querySelector('.page-header__toggle');
var pageHeader = document.querySelector('.page-header');

if (pageHeader !== undefined) {
  pageHeader.classList.add('page-header--close');

  if (menuToggler !== undefined) {
    menuToggler.addEventListener('click', function(e) {
      pageHeader.classList.toggle('page-header--open');
      pageHeader.classList.toggle('page-header--close');
    });
  }
}

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {
        lat: 34.8543784,
        lng: -111.7951384
      }
    });

    var image = 'img/icon-map-marker.svg';
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