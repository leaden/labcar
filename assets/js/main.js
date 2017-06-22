function initMap(){
  var map = new google.maps.Map(document.getElementById("map"),{
    zoom: 5,
    center: {lat: -33.43778, lng: -70.65028},
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false
  });

/*new AutocompleteDirectionsHandler(map);*/

var partida = (document.getElementById("partida"));
    var autocomplete = new google.maps.places.Autocomplete(partida);
        autocomplete.bindTo("bounds", map);

    var destino = (document.getElementById("destino"));
    var autocomplete = new google.maps.places.Autocomplete(destino);
        autocomplete.bindTo("bounds", map);
  var infoWindow = new google.maps.InfoWindow({map: map});


/* function getCurrentPosition - exito si el usuario comparte ubicacion - error */
function buscar(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
  }
}

document.getElementById("encuentrame").addEventListener("click", buscar);
var latitud, longitud;

/* para obtener latitud y longitud */
var funcionExito = function(posicion){
  latitud = posicion.coords.latitude;
  longitud = posicion.coords.longitude;

 var miUbicacion = new google.maps.Marker({
    position: {lat:latitud, lng:longitud},
    animation: google.maps.Animation.DROP,
    map: map
  });

  /* aumentaremos profundidad de visualizacion del mapa (map.setZomm) y nuevo centro (map.setCenter) */
  map.setZoom(17);
  map.setCenter({lat:latitud, lng:longitud});
}
  var funcionError = function(error){
    alert("Tenemos un problema con encontrar tu ubicacion");
  }

/* dibujando ruta*/
function dibujarRuta(directionsService, directionsDisplay) {
        var start = document.getElementById("partida").value;
        var destination = document.getElementById('destino').value;

       if(destination != "" && destination != "") {
            directionsService.route({
                start: start,
                destination: destination,
                travelMode: "DRIVING"
            },
            function(response, status) {
                if (status === "OK") {
                    directionsDisplay.setDirections(response);
                } else {
                    funcionErrorRuta();
                }
            });
        }
    }

}