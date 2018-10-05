function initMap() {
  // The location of Paris
  var Paris = {
    lat: 48.86,
    lng: 2.35
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: Paris
  });
  // The marker, positioned at Uluru

  var villes = document.getElementsByClassName("villes");

  for (var i = 0; i < document.getElementsByClassName("villes").length; i++) {

    var marker = new google.maps.Marker({
      position: {
        lat: parseFloat(villes[i].dataset.lat),
        lng: parseFloat(villes[i].dataset.lon)
      },
      map: map
    });
  }

}
