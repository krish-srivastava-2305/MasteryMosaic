var map;
var markers = [];

function initMap(latitude, longitude) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: latitude, lng: longitude },
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
    title: 'My Location'
  });

  var placesService = new google.maps.places.PlacesService(map);

  placesService.textSearch({
    types: ['school', 'university', 'college'],
    bounds: map.getBounds()
  }, processResults);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        initMap(latitude, longitude);
      },
      function(error) {
        showError(error);
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function processResults(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    clearMarkers();

    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: place.name
  });

  markers.push(marker); 
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null); 
  }
  markers = []; 
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}