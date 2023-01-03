let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  map.addListener('click', (event) => {
    geocodeLatLng(event.latLng, map);
  });
}


// Convert the latitude and longitude to an address using the Geocoding API
  function geocodeLatLng(latLng, map) {
    const geocoder = new google.maps.Geocoder;
    geocoder.geocode({'location': latLng}, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          // Display the address, latitude, and longitude in the application
          document.getElementById('address').innerText = results[0].formatted_address;
          document.getElementById('lat').innerText = latLng.lat();
          document.getElementById('lng').innerText = latLng.lng();
          // Print the address as a JSON object
          console.log(JSON.stringify(results[0]));
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
  
  window.initMap = initMap;


