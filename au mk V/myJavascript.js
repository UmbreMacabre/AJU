// Google Maps .api
function initMap() {
	var udtm = {
		lat: 29.084452,
		lng: -110.952827
	};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: udtm
	});
	var marker = new google.maps.Marker({
		position: udtm,
		map: map
	});
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}