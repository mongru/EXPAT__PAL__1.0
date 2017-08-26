document.addEventListener("DOMContentLoaded", function(){

    console.log("Google Maps ready :)");

    function initMap(lat, lng) {
        var warsaw = {lat: lat, lng: lng};
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: lat,
                lng: lng
            },
            zoom: 10
        });

        var marker = new google.maps.Marker({
          position: warsaw,
          map: map
        });

        var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');
        var types = document.getElementById('type-selector');
        var strictBounds = document.getElementById('strict-bounds-selector');

        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

        var autocomplete = new google.maps.places.Autocomplete(input);

        console.log(autocomplete);


        // Bind the map's bounds (viewport) property to the autocomplete object,
        // so that the autocomplete requests use the current map bounds for the
        // bounds option in the request.
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
            infowindow.close();
            marker.setVisible(false);
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert("Sorry we couldn't find:'" + place.name + "' Please try again");
                return;
            }

            console.log(autocomplete.gm_accessors_.place.Gc.formattedPrediction);


            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17); // Why 17? Because it looks good.
            }
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);

            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }

            infowindowContent.children['place-icon'].src = place.icon;
            infowindowContent.children['place-name'].textContent = place.name;
            infowindowContent.children['place-address'].textContent = address;
            infowindow.open(map, marker);
        });
    }

    // Geolocation of device
    var options = {
    enableHighAccuracy: true,
    timeout: 6000,
    maximumAge: 0
    };

    function success(position) {
        var crd = position.coords;

        console.log(position);
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        var latitude = crd.latitude;
        var longitude = crd.longitude;

        initMap(latitude, longitude);
        // console.log(`More or less ${crd.accuracy} meters.`);
    };

    function error(err) {
        initMap(52.250237, 21.012180);
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

// Init Google Map
    // initMap();

})
