//Change the next values with the coordinates of the location you want.
//You can get the coordinates form here http://www.gps-coordinates.net
var Latitude = 51.508742;
var Longitude = -0.120850;
var myCenter=new google.maps.LatLng(Latitude,Longitude);

function initialize() {
  var mapProp = {
  	//Change the boolean value true/false to enable/disable streetview control. >
  	streetViewControl:false,
  	//<;
  	//Change the maptype control from buttons to dropdown menu, change the mapTypeControl to false or delete the following code to disable the menu. >
    mapTypeControl:true,
    mapTypeControlOptions: {
      style:google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    //<;

    //Choose where to center the map, Change the "Latitude" and "Longitude" arguments with the coordinates you want the map to be centered on, or keep it as with the same values you entered earlier. >
    center:new google.maps.LatLng(Latitude,Longitude),
    //<;
    //Default zoom level for the map, 0 is the earth sized map.
    zoom:5,
    //<;
    //Specifies the map type to display, you can use SATELLITE, HYBRID, TERRAIN instead of ROADMAP. >
    mapTypeId:google.maps.MapTypeId.ROADMAP
    //<;
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

  // Marker overlay script, adds a marker to the center of the map >
  var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
//<;

// Sets the zoom level to 17 when double clicking on the marker, you can change the zoom level value. >
google.maps.event.addListener(marker,'dblclick',function() {
  map.setZoom(17);
  map.setCenter(marker.getPosition());
  });

//<;

// add info popup when clicking on the marker >
var infowindow = new google.maps.InfoWindow({
  //change the content value with the text you want to be displayed, make sure to keep the "" >
  content:"Hello World!"
  //<;
  });

//You can change the function to work on hover instead of clicking, to do so, change 'click' to 'mouseover' in the following line.
google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });
/* Then uncomment this line by deleting it as well as deleting the marks on line 62.
google.maps.event.addListener(marker, 'mouseout', function() {
  infowindow.close(map,marker);
  });
*/
//<;

}
google.maps.event.addDomListener(window, 'load', initialize);