/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var mousex;
var mousey;
var coordinates =[];


var webServiceUrl = "http://"+localStorage.getItem("Ip")+":8080/AAAACLIENT/webresources/exam/name?question=";


var context;
var canvas;
var count = 0;




var page;

var time;
var times;
var matricNumber;

var pageChange;
var array = [];
var str = "";
var questionCount = 0;
var totalQuestions = [];
var pageVerifier = 0;
var feed;
var image = new Image();





function callWebService( ){
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
  
  matricNumber = mats;
  
  
  document.getElementById("name").innerHTML = ""+lastName+" "+firstName+" | <small>"+subject+ "</small>";

  
  
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
 
 
 
 
if(localStorage.getItem("time")){
     var t = localStorage.getItem("time");
    times = t;
     
 }
 else{
     
 times =  data.questionTime;
 }
 
 
 feed = data.feedBack;
 
 
 
 
 var numbers = new Number(times);
 
 
 time = numbers;
 
 
 
 
  timer = setInterval(showRemaining,1000);
   
        
        
        
      
 setQuestions();
 
 // display data on the page
 } // end if
 } //

function setQuestions(){
    
    
    
    
   // var spl = array.split("#");
    var sec = str.split("#question");
    var paginateDiv = document.getElementById("pagination");
    var paginateAdd ="";
    var parentNode = paginateDiv.parentNode;
    
    if(localStorage.getItem("answers")){
     for(var c = 0; c < sec.length; c++){
       array.push(sec[c]);
      // totalQuestions.push(0);
    if(c == (sec.length - 1)){
           
       }
       else{
      paginateAdd += "<div class='pagination'  id='"+(c+1)+".'>"+(c+1)+" </div>"; 
       }   
            /*  var div = document.createElement('div');

  div.innerHTML =(c+1);
  div.setAttribute('class','pagination');
 //  div.setAttribute('id',(c+1));
  div.setAttribute('id',(c+1)+'.'); */
   
  
      
  
 
    //  parentNode.insertBefore(div,paginateDiv);

        }  
        
        var ans = localStorage.getItem("answers");
        var arr = ans.split(",");
        
        
        for(var ii = 0; ii < arr.length; ii++){
             
                if(arr[ii] == 0){
                    
             coordinates[ii] = "60*100"; 
             
             
                }
                else{
                 coordinates[ii] = arr[ii];
                 
                }
        }
        
        
      
        
        
        
      
  }else{
   for(var c = 0; c < sec.length; c++){
       array.push(sec[c]);
       totalQuestions.push(0);
        
      coordinates.push(0);
     if(c == (sec.length - 1)){
           
       }
       else{
      paginateAdd += "<div class='pagination'  id='"+(c+1)+".'>"+(c+1)+" </div>"; 
       }       
            /*  var div = document.createElement('div');

  div.innerHTML =(c+1);
  div.setAttribute('class','pagination');
 //  div.setAttribute('id',(c+1));
  div.setAttribute('id',(c+1)+'.'); */
   
  
      
  
 
    //  parentNode.insertBefore(div,paginateDiv);

        }
    
  }
  
 
  

 paginateDiv.innerHTML = paginateAdd;
 
  for(var e = 0; e < coordinates.length; e++){
            if(coordinates[e] != 0){
           
            
            var markers =  document.getElementById(e+'.');
            markers.setAttribute("style","background-color: red");
            }
        }
  
   
     var amountOfQuestions = document.getElementById("amount"); 
 amountOfQuestions.innerHTML = " "+array.length -1 +" Questions";
 

   
 page = 1;
 
   
    next();
 
    
    
}






function allowDrop(ev){
   
    ev.preventDefault();
}

function drag(ev){
   
    ev.dataTransfer.setData("Text",ev.target.id);
    
}

function drop(ev){
    
    alert(ev.target.id);
  // document.getElementById(ev.target.id).setAttribute("style","background-image:url()");
    
    mousex = ev.layerX;
     mousey = ev.layerY;
    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var documented = document.getElementById(data);
    
    //ev.target.appendChild(document.getElementById(data));
    documented.setAttribute("style","position:absolute; top:"+(mousey -23) +'px;'+"left:"+(mousex - 32)+'px;');
    var a = mousey;
    var b = mousex;
   
   
   
    var aa = a+"*";
    var bb = b;
    
    var join = aa+bb;
    coordinates[page] = join;
   
    
    
    
    
    
    
}

function next(){
     if(page == (array.length - 1)){
        
        return;
    }

     questionCount++;
    
   

 if(pageVerifier === 1){
       
      
  
 page++;
       
   //     startRotating();
   var pageC =    document.getElementById("number");
       
  pageC.innerHTML = page;
 }
  
 pageVerifier = 1;
 
    
    // var documented = document.getElementById("drag1");
    
    //ev.target.appendChild(document.getElementById(data));
   

 
        var answer = false;
        var answerMonitor;
          var questionv;
         
    begin();
       if(coordinates[page] !== 0){
   var xx =  coordinates[page];
  
   
  var split =  xx.split("*");
 
  
   var a;
   var b;
   for(var c = 0; c < split.length; c++){
       if(c % 2== 0){
          a = split[c]; 
       }
       else{
         b= split[c];  
       }
   }
   
   
    var documented = document.getElementById("drag1");
    
    //ev.target.appendChild(document.getElementById(data));
    documented.setAttribute("style","position:absolute; top:"+a+'px;'+"left:"+b+'px;');
    
       }
       
 }
 
 
 function begin(){
     
 
  
  var strings = array[questionCount].split(",");
  
  var stringg = strings[1];
  var tab = document.getElementById("table");
        var b = strings[0];
        tab.innerHTML = b;
        
        
        
  
  
     image.src = stringg;
     
     
     
       canvas = document.getElementById("drawRectangle");
   
   context = canvas.getContext("2d");
   
 
    
    context.beginPath();
  
    
   context.drawImage(image,0,0,canvas.getAttribute("width"),canvas.getAttribute("height"));
 }
 
 



function previous(){
     
   if(page == 1){
     return;
 }

    page--;
    questionCount--;
    
    var pageC =    document.getElementById("number");
       
  pageC.innerHTML = page;
  
  
    
      begin();
    
    
    if(coordinates[page] !== 0){
   var xx =  coordinates[page];
  
   
  var split =  xx.split("*");
 
  
   var a;
   var b;
   for(var c = 0; c < split.length; c++){
       if(c % 2== 0){
          a = split[c]; 
       }
       else{
         b= split[c];  
       }
   }
   
   
    var documented = document.getElementById("drag1");
    
    //ev.target.appendChild(document.getElementById(data));
    documented.setAttribute("style","position:absolute; top:"+a+'px;'+"left:"+b+'px;');
}
}
function pages(e){
    page = parseInt(e);
    questionCount = parseInt(e);
    
   var pageC =    document.getElementById("number");
  pageC.innerHTML = page;  
     begin();
    
    
    if(coordinates[page] !== 0){
   var xx =  coordinates[page];
  
   
  var split =  xx.split("*");
 
  
   var a;
   var b;
   for(var c = 0; c < split.length; c++){
       if(c % 2== 0){
          a = split[c]; 
       }
       else{
         b= split[c];  
       }
   }
   
   
    var documented = document.getElementById("drag1");
    
    //ev.target.appendChild(document.getElementById(data));
    documented.setAttribute("style","position:absolute; top:"+a+'px;'+"left:"+b+'px;');
}
}
function start(){
    
    
    
     
pageChange = document.getElementById("number").innerHTML;
 
 
   page = parseInt(pages);
 
    //connect();
  /*  worker.addEventListener('message',function(e){
        alert("worker said"+ e.data);
},false);  */



    callWebService();

 // var enter = document.getElementById("enterButton").addEventListener("click",log,false);
 



var subButs = document.getElementById("endExamination").addEventListener("click",endExams,false);
    var previous = document.getElementById("previous").addEventListener("click",previous,false);
  var next = document.getElementById("next").addEventListener("click",next,false);

}






var end = new Date('7 Apr 2014 00:00:00');


var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var timer;
var tt = 60;



var mm = 0;//where i set the time
var checkTimer = 0;
var maintainvalue = 0;







 

 
 

function showRemaining(){
    if(checkTimer >= 1){
        
    }
    else{
        mm = time;
    }
    checkTimer++;
  
   var now = new Date();
    var distance = end - now;
    if(distance < 0){
        //handle expiry
    }
    var days = Math.floor(distance / day);
    var hours = Math.floor((distance % day)/hour);
    var minutes = Math.floor((distance % hour )/minute );
    var seconds = Math.floor((distance % minute)/second);
    var milliseconds = distance % second;
    
  var ele = document.getElementById("timer");
  // ele.innerHTML = minutes+'m'+seconds+'s'+milliseconds+'ms';
   tt--;
   if(tt == 0){
      mm--
      ele.innerHTML =  mm+'m' +" : " +tt +'s' ;   
      tt = 60;
   }
   
   else{
    ele.innerHTML =  mm+'m' +" : " +tt +'s' ;
  
   }
   
   if(mm <= 5){
       if(tt % 2==0){
       ele.style.color = "red";
       }
       else{
       ele.style.color = "gray";    
       }
   }
   
   if(mm < 0){
        feedback();
        
   }
   
   if( mm % 2 == 0){
       //time to send answers;
     if(maintainvalue !== mm){
     
        connect();
     }
     maintainvalue = mm;
     
   }
   else{
       
   }
   
}


var wsocket;


function connect() {
    
    
 
wsocket = new WebSocket("ws://"+localStorage.getItem("Ip")+":8080/AAAASTUDENT/endpoint?matric="+matricNumber+"&time="+mm+"&answers="+coordinates);

wsocket.onmessage = onMessage;
}
function onMessage(evt) {
   
   
//var arraypv = evt.data.split(",");
//document.getElementById("boys").innerHTML += arraypv[0];


}



 
   
    



  
function endExams(){
    var countt = 0;
 var totalNumbers =   array.length;
 var tn = coordinates.length -1;
 for(var i = 0; i < coordinates.length - 1; i++){
     if(coordinates[i] != 0){
         countt++;
     }
 }
if(confirm('are you sure you want to end exam\n\
you have attempted '+countt+' out of '+tn)){
        feedback();
        
    
}
else{
        alert("no");
}



    
}

/*function hi(){
    worker.postMessage("jol");
    alert("posted");
}   */

function feedback(){
  var body =  document.getElementById("examBody");
  body.innerHTML = feed;
  
  
  
  
}

function clicked(e){
     
     
         
    if(e.target.tagName ==="DIV"){
        
        
        var pageCounter = parseInt(e.target.id);
        
     
        
     
      
       
       if(pageCounter >= 0){
        var number = parseInt(e.target.innerHTML);
     
        pages(number);
        return;
       }
        
        
        return;
    }
    
}

start();
window.addEventListener("load",start,false);
document.addEventListener("click",clicked,false);