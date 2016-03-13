window.onload = function(e) {
	var myCenter=new google.maps.LatLng(45.434046,12.340284);
	var mapProp = {
		center:myCenter,
		zoom:18,
		mapTypeId:google.maps.MapTypeId.HYBRID
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	map.setTilt(0);
}