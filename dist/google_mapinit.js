function initMap() {
  var warsaw = {lat: 52.229045, lng: 21.003254};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: warsaw
  });
  var marker = new google.maps.Marker({
    position: warsaw,
    map: map
  });
}
