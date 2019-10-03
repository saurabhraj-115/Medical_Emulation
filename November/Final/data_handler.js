function loadJSON() {
  var data_file = "https://saurabhraj-115.github.io/Medical_Emulation/November/patient_data.json";
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
      jsonObj = JSON.parse(http_request.responseText);



    }
  }

  http_request.open("GET", data_file, true);
  http_request.send();


}


function showJSON() {


  i += 1;
  var n = toString(i)
  // var jname = jsonObj[i]["name"];
  // var jadd = jsonObj[i]["address"];
  var jsbp = jsonObj[i]["systolic_BP"];
  var jdbp = jsonObj[i]["diatolic_BP"];
  //var jtemp = jsonObj[i]["body_temp_degF"];
  var jheart = jsonObj[i]["heart_rate"];
  document.getElementById("demo").innerHTML = jsbp+" / "+jdbp;

  x.push(i);
  y.push(jheart);
  var trace1 = {
    x,
    y,
    type: 'scatter',
    name: 'Patient Heart Rate'
  };
  var data = [trace1];
  
  
  
  
  var layout = {
    autosize: true,
    // width: 1500,
    height: 1000,
    title: {
      text: 'Wipro Medicare',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05,
    },
    xaxis: {
      showgrig: true,
      gridcolor: '#063e0f',
      gridwidth: 1,
      title: {
        text: 'Time Elapsed(s)',
        font: {
          family: 'Courier New, monospace',
          size: 30,
          color: 'black'
        }
      },
    },
    yaxis: {
      showgrig: true,
      gridcolor: '#063e0f',
      gridwidth: 1,
      title: {
        text: 'Heart Rate',
        font: {
          family: 'Courier New, monospace',
          size: 30,
          color: 'black'
        }
      }
    },
    plot_bgcolor: "black",
    paper_bgcolor: '#7f7f7f'
  };

  Plotly.newPlot('myDiv', data, layout, {}, {
    showSendToCloud: true
  });
  

}
