/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var selfEasyrtcid = "";
 
 
function connect() {
  
  easyrtc.setVideoDims(640,480);
  easyrtc.setPeerListener(addToConversation);
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
  //clearConnectList();
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
            parseLogssss(asyncRequest);  //callBack( asyncRequest );
    }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
    asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
    asyncRequest.send();
     }
     catch(err){
         console.log(err);
     }
     
  document.getElementById("iam").innerHTML = "I am " + easyrtc.cleanId(easyrtcid);
  try{
  var requestUrl = sessionStorage.getItem("URL")+"/Store?id="+sessionStorage.getItem("secretId")+"&name="+sessionStorage.getItem("user");
    
     var asyncRequest = new XMLHttpRequest(); // create request
  
 // set up callback function and store it
    asyncRequest.addEventListener("readystatechange",
    function() { 
            parseLogger(asyncRequest);  //callBack( asyncRequest );
    }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
    asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
    asyncRequest.send();
     }
     catch(err){
         console.log(err)
     }
  
}

 function parseLogger(asyncRequest){
                 if(asyncRequest.readyState === 4 && asyncRequest.status === 200){
                     
                 }
             }
             
 
function parseLogssss(asyncRequest){
   if(asyncRequest.readyState === 4 && asyncRequest.status === 200){
                     
                 }
}
function sendStuffWS(otherEasyrtcid) {
  var text = document.getElementById("sendMessageText").value;
  if(text.replace(/\s/g, "").length === 0) { // Don"t send just whitespace
    return;
  }
  
  easyrtc.sendDataWS(otherEasyrtcid, "message",  text);
  addToConversation("Me", "message", text);
  document.getElementById("sendMessageText").value = "";
}


function addToConversation(who, msgType, content) {
    
  // Escape html special characters, then add linefeeds.
  
  
  content = content.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  content = content.replace(/\n/g, "<br />");
  
     try{
     var requestUrl = sessionStorage.getItem("URL")+"/Chats"
  
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
    asyncRequest.addEventListener("readystatechange",
    function() { 
            parseLog(asyncRequest,who,content);  //callBack( asyncRequest );
    }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
    asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
    asyncRequest.send();
     }
     catch(err){
         console.log(err)
     }
  
  
 
  
}
 
  
 function parseLog(asyncRequest,who,content){
      if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
           {
           var data = JSON.parse(asyncRequest.responseText);
           for(var index in data){
               console.log(data[index].id);
               if(data[index].id === who){
                   who = data[index].name;
               }
           }
            
            var string = "";
     string+= "<div class='box-comment'>"+" <!-- User image -->"+"<img class='img-circle img-sm' src='libs/dist/img/user4-128x128.jpg' alt='user image'>"+"<div class='comment-text'>" +"<span class='username'>"+who+ " <span class='text-muted pull-right'>8:03 PM Today</span>"+ "</span><!-- /.username -->" +content+"</div><!-- /.comment-text -->"+"</div>";
   
     document.getElementById("conversation").innerHTML += string;
  
           }
 } 
  
 
 function key(e){
     
     if(e.keyCode == "13"){
        
         if(document.getElementById("sendMessageText").value !== ""  ){
           
            var sep = document.getElementById("otherClients").innerHTML;
            
            var separate = sep.split("<button>");
            var text = document.getElementById("sendMessageText").value;
            for(var index = 1; index < separate.length; index++){
                
                 
                   
                   if(text.replace(/\s/g, "").length === 0) { // Don"t send just whitespace
                         return;
                    }
                
                easyrtc.sendDataWS(separate[index].substring(0,20), "message",  text);
                  
                  
            }
               addToConversation(sessionStorage.getItem("user"), "message", text);
               document.getElementById("sendMessageText").value = "";
                     
         }
    
     }
 }
 document.addEventListener("keypress",key,false);
 
 
function loginFailure(errorCode, message) {
  easyrtc.showError(errorCode, message);
}
 