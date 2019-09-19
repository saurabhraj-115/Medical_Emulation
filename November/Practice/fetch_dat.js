function loadJSON() {
  var data_file = "https://github.com/saurabhraj-115/Medical_Emulation/blob/master/November/patient_data.json";
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
      document.getElementById("Patient ID").innerHTML = jsonObj.patient_id;
      document.getElementById("Name").innerHTML = jsonObj.name;
      document.getElementById("Email").innerHTML = jsonObj.email;
      document.getElementById("Address").innerHTML = jsonObj.address;
      document.getElementById("Body Temp(F)").innerHTML = jsonObj.body_temo_degF;
      document.getElementById("Heart Rate").innerHTML = jsonObj.heart_rate;
      document.getElementById("Systolic Blood Pressure").innerHTML = jsonObj.systolic_BP;
      document.getElementById("Diatolic Blood Pressure").innerHTML = jsonObj.diatolic_BP;
      document.getElementById("Anesthesia Duration").innerHTML = jsonObj.anesthesia_duration;
    }
  }

  http_request.open("GET", data_file, true);
  http_request.send();
  return jsonObj;
}




function fetchDetails(){
  var callObj= loadJSON()
  var i;
  for (i=5; i>0; i--){
    alert(callObj.Math.floor((Math.random() * 1000) + 1).name)

  }


}
