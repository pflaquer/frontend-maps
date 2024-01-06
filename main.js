let buskers = [];

let msg = 'Currently Busking='+buskers.length;
	
document.getElementById("current").textContent = msg;

let lat = 40.6958
let lon = -73.9171


var map = null;
var arraySucursales = [
	{lat: lat, lng: lon},
	{lat: lat+.5, lng: lon+.25}
	//{lat: 24.017827, lng: -104.653228}
	//{lat: 20.718606, lng:  -103.325503},
	//{lat: 19.469391, lng: -99.180013}
];

var arrayTitlesSucursales = [
	'Todas las sucursales',
	'Sucursal 1',
	'Sucursal 2',
	//'Sucursal 3',
	//'Sucursal 4'
];

window.onload = function() {
	//var myLatlng = new google.maps.LatLng(19.3960362,-99.2270672);
	var myOptions = {
		//center: myLatlng,
		center: new google.maps.LatLng(lat, lon),
		zoom: 13,
		scrollwheel: false,
		//mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
	};

	map = new google.maps.Map(document.getElementById("map"), myOptions);

	var img = 'http://pizzamaestra.com/v1/wp-content/uploads/2017/11/pin-map-1.png';

	var sucursal1 = new google.maps.Marker({
		position: arraySucursales[0],
		map: map,
		animation: google.maps.Animation.DROP,
		icon: img
	});

	var sucursal2 = new google.maps.Marker({
		position: arraySucursales[1],
		map: map,
		animation: google.maps.Animation.DROP,
		icon: img
	});

	/*var sucursal3 = new google.maps.Marker({
		position: arraySucursales[2],
		map: map,
		animation: google.maps.Animation.DROP,
		icon: img
	});

	var sucursal4 = new google.maps.Marker({
		position: arraySucursales[3],
		map: map,
		animation: google.maps.Animation.DROP,
		icon: img
	});

	var sucursal5 = new google.maps.Marker({
		position: arraySucursales[4],
		map: map,
		animation: google.maps.Animation.DROP,
		icon: img
	});*/

	var markers = {
		'sucursal-1': sucursal1
		/*'sucursal-2': sucursal2,
		'sucursal-3': sucursal3,
		'sucursal-4': sucursal4,
		'sucursal-5': sucursal5*/
	};

	// Editable string with html markup for tooltip content
	/*
	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'<h3 id="firstHeading" class="mapHeading">Mishcon de Reya</h3>'+
		'</div>'+
		'<div id="mapContent">'+
		'<p>Summit House,<br />'+
		'12 Red Lion Square</p>'+
		'</div>'+
		'</div>';
	*/

	/*var infowindow1 = new google.maps.InfoWindow({
		content: '<h3 class="mapHeading">' + arrayTitlesSucursales[0] + '</h3>'
	});*/
	var infowindow2 = new google.maps.InfoWindow({
		/*content: '<h3 class="mapHeading">'+ arrayTitlesSucursales[1] +'</h3>'*/
		content: 	'<div id="content">'+
						'<div id="siteNotice">'+
							'<h3 id="firstHeading" class="mapHeading">Pizza Maestra Centro</h3>'+
						'</div>'+
						'<div id="mapContent">'+
							'<p>Tel: 5500 0000</p>'+
						'</div>'+
					'</div>'
	});
	/*var infowindow3 = new google.maps.InfoWindow({
		content: '<h3 class="mapHeading">'+ arrayTitlesSucursales[2] +'</h3>'
	});
	var infowindow4 = new google.maps.InfoWindow({
		content: '<h3 class="mapHeading">' + arrayTitlesSucursales[3] + '</h3>'
	});
	var infowindow5 = new google.maps.InfoWindow({
		content: '<h3 class="mapHeading">' + arrayTitlesSucursales[4] + '</h3>'
	});*/

	

	/*google.maps.event.addListener(sucursal1, 'click', function() {
		sucursal(0);
	});*/
	google.maps.event.addListener(sucursal2, 'click', function() {
		sucursal(1);
	});
	/*google.maps.event.addListener(sucursal3, 'click', function() {
		sucursal(2);
	});
	google.maps.event.addListener(sucursal4, 'click', function() {
		sucursal(3);
	});
	google.maps.event.addListener(sucursal4, 'click', function() {
		sucursal(4);
	});*/
	
	/*google.maps.event.addListener(sucursal1, 'mouseover', function() {
		infowindow1.open(map,sucursal1);
	});
	google.maps.event.addListener(sucursal1, 'mouseout', function() {
		infowindow1.close(map,sucursal1);
	});*/

	google.maps.event.addListener(sucursal2, 'mouseover', function() {
		infowindow2.open(map,sucursal2);
	});
	google.maps.event.addListener(sucursal2, 'mouseout', function() {
		infowindow2.close(map,sucursal2);
	});
	/*google.maps.event.addListener(sucursal3, 'mouseover', function() {
		infowindow3.open(map,sucursal3);
	});
	google.maps.event.addListener(sucursal3, 'mouseout', function() {
		infowindow3.close(map,sucursal3);
	});
	google.maps.event.addListener(sucursal4, 'mouseover', function() {
		infowindow4.open(map,sucursal4);
	});
	google.maps.event.addListener(sucursal4, 'mouseout', function() {
		infowindow4.close(map,sucursal4);
	});
	google.maps.event.addListener(sucursal5, 'mouseover', function() {
		infowindow5.open(map,sucursal5);
	});
	google.maps.event.addListener(sucursal5, 'mouseout', function() {
		infowindow5.close(map,sucursal5);
	});*/
};

function sucursal(index){
	if (map) {
		if (index == 0) {
			$('#info').removeClass('activo');
			$('#info').addClass('inactivo');
			map.setCenter({lat: 19.4267050, lng: -99.1391560});
			map.setZoom(13);
		} else {
			$('#info').removeClass('inactivo');
			$('#info').addClass('activo');
			map.setCenter(arraySucursales[index]);
			map.setZoom(17);
		}
	}
	$('.btnClose').on('click', function(){
		$('#info').removeClass('activo');
		$('#info').addClass('inactivo');
		map.setCenter({lat: lat, lng: lon});
		map.setZoom(13);
	});
}


let state = false;

let btn = document.getElementById("pulse")

btn.onclick = (e)=>{
  btn.classList.toggle('button-ani');
  console.log(e);
  state = !state;
  alert('Busking Status Set to '+state);
	buskers.push(this);	
	let msg = 'Currently Busking='+buskers.length;
	
document.getElementById("current").textContent = msg;
	
}
