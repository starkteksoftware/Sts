/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//var webServiceUrl = "http://localhost:8080/AAAACLIENT/webresources/exam/jolaade";

//var login = "http://localhost:8080/AAAACLIENT/webresources/exam/student/matric";


var webServiceUrl = "http://192.168.1.2:8080/AAAACLIENT/webresources/exam/jolaade";

var login = "http://192.168.1.2:8080/AAAACLIENT/webresources/exam/student/matric";


var page;

var context;
var canvas;
var count = 0;
var coordinates = [];

var pageChange;
var array = [];
var str = "";
var questionCount = 0;
var totalQuestions = [];
var pageVerifier = 0;
var image = new Image();




function log(){
    
var c = document.getElementById("matric").value;

    var requestUrl = login+"?matric="+c;
        //+ methodAndArguments;
        

   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLog(asyncRequest);  //callBack( asyncRequest );
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
function parseLog( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
if(data === "true"){
           
   callWebService();
}
else{
    window.alert("wrong number");
}

 
 // display data on the page
 } // end if
 } //









function callWebService( ){
    
var requestUrl = webServiceUrl;
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
 
       
 
      
 setQuestions();
 
 // display data on the page
 } // end if
 } //
 
 
 function setQuestions(){
     
    var sec = str.split("#question");
    alert(sec);
    var paginateDiv = document.getElementById("pagination");
    var paginateAdd ="";
    var parentNode = paginateDiv.parentNode;
   
    
   
  //  window.alert(spl);
   for(var c = 0; c < sec.length; c++){
       array.push(sec[c]);
       totalQuestions.push(0);
      paginateAdd += "<div class='pagination'  id='"+(c+1)+".'>"+(c+1)+" </div>"; 
  /*  var div = document.createElement('div');

  div.innerHTML =(c+1);
  div.setAttribute('class','pagination');
 //  div.setAttribute('id',(c+1));
  div.setAttribute('id',(c+1)+'.'); */
   
  
      
  
 
    //  parentNode.insertBefore(div,paginateDiv);

        }
    
    

 paginateDiv.innerHTML = paginateAdd;
    
    
  
  
  
  
 var amountOfQuestions = document.getElementById("amount"); 
 amountOfQuestions.innerHTML = " Of "+array.length +" Questions";
 
  
 
   
    next();
    
 }
 
 function next(){
     
    questionCount++;

 if(pageVerifier === 1){
 page++;
   //     startRotating();
   var pageC =    document.getElementById("number");
  pageC.innerHTML = page;
 }
  
 pageVerifier = 1;

       var tab = document.getElementById("table");
        var b ="";
        var answer = false;
        var answerMonitor;
          var questionv;
         
    begin();
 }
 
 function begin(){
  var stringg =   array[questionCount ];
  
     image.src = stringg;
     
       canvas = document.getElementById("drawRectangle");
   
   context = canvas.getContext("2d");
   
 
    
    context.beginPath();
 /*   for( var c = 0; c < 6; c++){
       
        if(c % 2 === 0){
    context.drawImage(image, c * 50, c * 50, 40, 50);
     context.drawImage(image, c + 1 * 50, c * 50, 40, 50);
        }
        else{
       context.drawImage(image, 0 * 50, c * 50, 40, 50);      
        context.drawImage(image, c * 50, c * 50, 40, 50);   
        }
    
    } */
 //    context.drawImage(image,canvas.getAttribute("width"), canvas.getAttribute("height"),100, 100);   
   
      context.drawImage(image,0,0,canvas.getAttribute("width"),canvas.getAttribute("height"));
 }
 
 
 function start(){
    
    alert("start");
pageChange = document.getElementById("number").innerHTML;


 
 
  // page = parseInt(pages);
 
    //connect();
  /*  worker.addEventListener('message',function(e){
        alert("worker said"+ e.data);
},false);  */





  var enter = document.getElementById("enterButton").addEventListener("click",log,false);

  var previous = document.getElementById("previous").addEventListener("click",previous,false);
  var next = document.getElementById("next").addEventListener("click",next,false);

//var next = document.getElementById("next").addEventListener("click",hi,false);
}

/*function hi(){
    worker.postMessage("jol");
    alert("posted");
}   */



window.addEventListener("load",start,false);

