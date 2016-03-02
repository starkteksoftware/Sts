/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var count=0; 
var msgType="welcome,"; 
var msgType1=""; 
 
function r(){ 
    var msg=['Rat','ball','cow','dog','sat','.','kite','fan','hut','ink','junk','man','kilo','lung','monday','soon','.','sunday','poet','raw','sat','temple','user','van','xmas','now','owl','.','fun','now']; 
    for(i=0;i<10;i++){ 
        var randNum=Math.floor((Math.random()*29)+1); 
          
        if(msg[randNum]!=".") 
        msgType = msgType +" "+ msg[randNum]; 
        else
        msgType = msgType + msg[randNum]; 
        count++; 
    } 
}    
  
function s(){ 
    var msg=['apple','because','jute','candy','dusty','enough','.','fell-off','ground','happen','India','judicial','system','know','love','eating','really','.','went','play','rotten','surely','title','under','various','expanded','data','object','.']; 
    for(i=0;i<15;i++) 
    { 
        var randNum=Math.floor((Math.random()*28)+1); 
          
        if(msg[randNum]!=".") 
        msgType = msgType +" "+ msg[randNum]; 
        else
        msgType = msgType + msg[randNum]; 
        count++; 
    } 
} 
function t(){ 
      
var msg =['aahing','aaliis','aarrgh','abacas',' abacus','abamps','abased','abaser','abases','forget','cofee','during','last-minute','gateways','boring','brew','amazing','conversation','over','relaxing','under','conversation','chewing','peeling','produces','starfish','breathing','ovaries','stomach','testicles','intestine'] 
for(  i=0;i<20;i++) 
    { 
        var randNum=Math.floor((Math.random()*31)+1); 
          
        if(msg[randNum]!=".") 
        msgType = msgType +" "+ msg[randNum]; 
        else
        msgType = msgType + msg[randNum]; 
        count++; 
    } 
  
}        
function beginit(){ 
day = new Date(); 
startType = day.getTime(); 
document.theForm.given.value =msgType; 
//document.theForm.typed.focus(); 
document.theForm.typed.select(); 
} 
function cheat(){ 
alert("You can not change that!"); 
document.theForm.typed.focus(); 
} 
 
function stopIt() { 
dayTwo = new Date(); 
endType = dayTwo.getTime(); 
totalTime = ((endType - startType) / 1000) 
spd = Math.round((count/totalTime) * 60) 
if(document.theForm.typed.value.length==document.theForm.given.value.length) 
{ 
    if (document.theForm.typed.value === document.theForm.given.value) 
    { 
        alert("\nYou typed  " + count + " word sentence in "
        + totalTime + " seconds, a speed of about " + spd + " words per minute!") 
     //   window.location.reload(); 
    } 
    else 
    { 
        alert("You made some error, ") 
       // window.location.reload(); 
    } 
} 
else
{ 
     
    alert("You didn't typed the whole Sentence or You might have left something. "+ " " + " "+ "Next Time Type Carefully...!!"); 
   // window.location.reload(); 
} 
} 