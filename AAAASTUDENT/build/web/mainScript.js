/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var webServiceUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/name?question=";


function loadjscssfile(filename, filetype){
    
 if (filetype === "js"){ //if filename is a external JavaScript file
   
  var fileref = document.createElement('script');
  fileref.setAttribute("type","text/javascript");
  fileref.setAttribute("src", filename);
 }
 else if ( filetype == "css"){ //if filename is an external CSS file
  var fileref=document.createElement("link");
  fileref.setAttribute("rel", "stylesheet");
  fileref.setAttribute("type", "text/css");
  fileref.setAttribute("href", filename);
 }
 if ( typeof fileref != "undefined")
     
 
  
  
  document.getElementsByTagName("head")[0].appendChild(fileref);
  
  
  
  
 
  
  
  
 
  
}

function staerrt(){
   
       var url = document.URL;
 
  var requestUrl = webServiceUrl+subject;
        //+ methodAndArguments;
        
    
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseData(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
 

  
  
    



}

function parseData( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object


 var data = JSON.parse(asyncRequest.responseText);
       
        
 str = data.question.toString();
 
   
loadjscssfile("setter.js", "js"); //dynamically load and add this .js file
 
 // display data on the page
 } // end if
 } //

function starts(){
    var url = document.URL;
     
    
 var matNumber = url.split("=");
   
    
     
  var sub = matNumber[1].split("&");
  var subject = sub[0];
  
  var last = matNumber[2].split("&");
  var first = matNumber[3].split("&");
  var mat = matNumber[4].split("&");
  
  var lastName = last[0];
  var firstName = first[0];
  var mats = mat[0];
  
  
  
  
    
     document.getElementById("image").src = sessionStorage.getItem("URL")+"/AAAACLIENT/ImageRetriever?image="+mats;
  
  
      if(url.indexOf("_T.T") != -1){
       
  loadjscssfile("timerTest.js", "js");  
    }
    
      if(url.indexOf("_A.T") != -1){
       
  loadjscssfile("advancedTest.js", "js");  
    }
    
    
    
    
      if(url.indexOf("_S.D") != -1){
       
  loadjscssfile("singleDrag.js", "js");  
    }
    
      if(url.indexOf("_P.T") != -1){
       
  loadjscssfile("personalityTest.js", "js");  
    }
    
    if(url.indexOf("_M.R") != -1){
       
  loadjscssfile("MultipleResponse.js", "js");  
    }
    if(url.indexOf("_E.S") != -1){
       
  loadjscssfile("essay.js", "js");  
  
    }
   if(url.indexOf("_S.R")!= -1 ){
  loadjscssfile("setter.js", "js");  
    }
    if(url.indexOf("_A.E")!= -1 ){
  loadjscssfile("advancedEssay.js", "js");  
    }
    
    
    if(url.indexOf("_T.F") != -1 ){
  loadjscssfile("TrueOrFalse.js", "js");  
    }
   if(url.indexOf("_B.G")!= -1 ){
  loadjscssfile("BlankGap.js", "js");  
    }
    if(url.indexOf("_D.G")!= -1 ){
  loadjscssfile("Dragged.js", "js");  
    }
  if(url.indexOf("_F.B") != -1){
  loadjscssfile("FillInTheBlank.js", "js");  
    }
  if(url.indexOf("_L.S") != -1){
  loadjscssfile("LinkertScale.js", "js");  
    }
   if(url.indexOf("_M.X")!= -1){
  loadjscssfile("Matrix.js", "js");  
    }
    if(url.indexOf("_S.M") != -1){
  loadjscssfile("SurveyMatric.js", "js");  
    }
    
     
    var att = localStorage.getItem(subject+"attempt");
     
     if(att == 1)
   loadjscssfile("singleOption.js", "js");  
   
   
    
    
   if(att == 2){
     loadjscssfile("popAnswer.js", "js");  
    
     
    
       
 
    }
  
     
 
   if(att == 3){
     loadjscssfile("thirdAttempt.js", "js");  
     alert("3 rd");
      
       
    
     
    
       
 
    }
  

}


function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}






//window.addEventListener("contextmenu",con,false);

window.addEventListener("load",starts,false);
//window.addEventListener("beforeunload",script,false);



