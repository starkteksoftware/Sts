/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var selfEasyrtcid = "";
 
 
function connect() {
  easyrtc.setVideoDims(640,480);
  easyrtc.setRoomOccupantListener(convertListToButtons);
  easyrtc.easyApp("easyrtc.audioVideoSimple", "selfVideo", ["callerVideo"], loginSuccess, loginFailure);
 }
 
 
function clearConnectList() {
  var otherClientDiv = document.getElementById("otherClients");
  while (otherClientDiv.hasChildNodes()) {
    otherClientDiv.removeChild(otherClientDiv.lastChild);
  }
}
 
 
function convertListToButtons (roomName, data, isPrimary) {
  clearConnectList();
  var otherClientDiv = document.getElementById("otherClients");
  for(var easyrtcid in data) {
    var button = document.createElement("button");
    button.onclick = function(easyrtcid) {
      return function() {
        performCall(easyrtcid);
      };
    }(easyrtcid);
 
    var label = document.createTextNode(easyrtc.idToName(easyrtcid));
    button.appendChild(label);
    otherClientDiv.appendChild(button);
  }
}
 
 
function performCall(otherEasyrtcid) {
  easyrtc.hangupAll();
 
  var successCB = function() {};
  var failureCB = function() {};
  easyrtc.call(otherEasyrtcid, successCB, failureCB);
}
 
 
function loginSuccess(easyrtcid) {
  selfEasyrtcid = easyrtcid;
  sessionStorage.setItem("secretId",easyrtcid);
  var title= sessionStorage.getItem("activeTitle");
  var message = sessionStorage.getItem("AddMessage");
  var description =sessionStorage.getItem("description");
  
  try{
     var requestUrl = sessionStorage.getItem("URL")+"/Stream?id="+sessionStorage.getItem("secretId")+"&name="+sessionStorage.getItem("user")+"&title="+title+"&message="+message+"&description="+description;
     var asyncRequest = new XMLHttpRequest(); // create request
  
 // set up callback function and store it
    asyncRequest.addEventListener("readystatechange",
    function() { 
            parseLogs(asyncRequest);  //callBack( asyncRequest );
    }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
    asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
    asyncRequest.send();
     }
     catch(err){
         console.log(err);
     }
  document.getElementById("iam").innerHTML = "I am " + easyrtc.cleanId(easyrtcid);
}
 
function parseLogs(asyncRequest){
    
}
 
function loginFailure(errorCode, message) {
  easyrtc.showError(errorCode, message);
}