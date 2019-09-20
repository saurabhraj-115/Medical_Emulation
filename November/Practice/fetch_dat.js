function loadJSON(index) {
  var data_file = "https://api.jsonbin.io/b/5d836435ec533d2cc4815efe";
  var http_request = new XMLHttpRequest();
  try {
    // Opera 8.0+, Firefox, Chrome, Safari
    http_request = new XMLHttpRequest();
  } catch (e) {
    // Internet Explorer Browsers
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");

    } catch (e) {

      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        // Something went wrong
        alert("Your browser broke!");
        return false;
      }

    }
  }

  http_request.onreadystatechange = function() {

    if (http_request.readyState == 4) {
      // Javascript function JSON.parse to parse JSON data
      var jsonObj = JSON.parse(http_request.responseText);

      // jsonObj variable now contains the data structure and can
      // be accessed as jsonObj.name and jsonObj.country.

      alert(jsonObj["210"]["name"]+" "+jsonObj["210"]["address"] + " " + jsonObj["210"]["body_temp_degF"]);
    }
  }

  http_request.open("GET", data_file, true);
  http_request.send();

}
