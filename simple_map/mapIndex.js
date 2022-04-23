function initMap(lat = 20.593684, lng = 78.96288) {

  const myLatLng = { lat: lat ,lng: lng };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;