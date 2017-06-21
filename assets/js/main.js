function initMap(){
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 5,
		center: {lat: -91191427, lng: -77.0349046},
		mapTypeControl:false,
		zoomControl:false,
		streetViewControl:false
	});


document.getElementById("encuentrame").addEventListener("click", buscar);
	var latitud,longitud;
	var funcionExito = function(posicion){
		latitud= posicion.coords.latitude;
		longitud = posicion.coords.longitude;
		var image = "http://maps.google.com/mapfiles/kml/shapes/";
		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map: map,
			icon:image + ""
		});
		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	}

	var funcionError = function (error){
    	alert("Tenemos un problema con encontrar tu ubicación");
    }



}