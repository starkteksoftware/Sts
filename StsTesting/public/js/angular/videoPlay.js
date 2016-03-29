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

//
//Copyright (c) 2015, Priologic Software Inc.
//All rights reserved.
//
//Redistribution and use in source and binary forms, with or without
//modification, are permitted provided that the following conditions are met:
//
//  * Redistributions of source code must retain the above copyright notice,
//    this list of conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//
//
//THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
//AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
//IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
//ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
//LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
//CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
//SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
//INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
//CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
//ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
//POSSIBILITY OF SUCH DAMAGE.
//
var selfEasyrtcid = "";
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
 
function connect() {
    
  easyrtc.setPeerListener(addToConversation);
  easyrtc.setRoomOccupantListener(convertListToButtons);
  easyrtc.connect("easyrtc.instantMessaging", loginSuccess, loginFailure);
  
}
 
 var contacts = [];
function convertListToButtons (roomName, occupants, isPrimary) {
   
  var otherClientDiv = document.getElementById("otherClients");
  while (otherClientDiv.hasChildNodes()) {
    otherClientDiv.removeChild(otherClientDiv.lastChild);
    
  }
 
 
  contacts.push(occupants);
 
  for(var easyrtcid in occupants) {
      console.log(easyrtcid)
      
      
    var button = document.createElement("button");
    button.onclick = function(easyrtcid) {
      return function() {
        sendStuffWS(easyrtcid);
      };
    }
    (easyrtcid);
    
    
    var label = document.createTextNode( easyrtc.idToName(easyrtcid));
    button.appendChild(label);
 
    otherClientDiv.appendChild(button);
  }
  if( !otherClientDiv.hasChildNodes() ) {
    otherClientDiv.innerHTML = "<em>Nobody else logged in to talk to...</em>";
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
 
 
function loginSuccess(easyrtcid) {
  selfEasyrtcid = easyrtcid;
  sessionStorage.setItem("secretId",easyrtcid);
  try{
     var requestUrl = sessionStorage.getItem("URL")+"/Store?id="+sessionStorage.getItem("secretId")+"&name="+sessionStorage.getItem("user");
   
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
         console.log(err)
     }
  
  
  document.getElementById("iam").innerHTML = "I am " + easyrtcid;
}
 
 
function loginFailure(errorCode, message) {
  easyrtc.showError(errorCode, message);
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
 window.addEventListener("load",starts,false);
 
 function starts(){
     connect();
 }
  
  
  function parseLogs(asyncRequest){
      
  }