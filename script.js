// Question : 02

//! XMLHTTP REQUEST:
//! STEP 1:- Create a XHR Onject:

var request1 = new XMLHttpRequest();

//! STEP 2:- Openning a connecton to server:

request1.open("GET", "https://restcountries.com/v3.1/all", true);

//! STEP 3:- Iniating a bridge to server / sending request:

request1.send();

//! STEP 4:- Server Response:

request1.onload = function () {
  var data1 = request1.response;
  // console.log(data);
  var res1 = JSON.parse(data1);
  console.log(res1);
  for (let i = 0; i < res1.length; i++) {
    console.log("Flags:" +" "+ res1[i].flags.svg);
  }
};


// Question : 03

//! XMLHTTP REQUEST:
//! STEP 1:- Create a XHR Onject:

var request = new XMLHttpRequest();

//! STEP 2:- Openning a connecton to server:

request.open("GET", "https://restcountries.com/v3.1/all", true);

//! STEP 3:- Iniating a bridge to server / sending request:

request.send();

//! STEP 4:- Server Response:

request.onload = function () {
  var data = request.response;
  // console.log(data);
  var res = JSON.parse(data);
  // console.log(res);
  for (let i = 0; i < res.length; i++) {
    console.log("Country_Name:"+" "+  res[i].name.common);
    console.log("Region:" +" "+  res[i].region);
    console.log("Sub_Region:" +" "+  res[i].subregion);
    console.log("Population:" +" "+res[i].population);
  }
};
