/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





function start(){
    var matric = localStorage.getItem("matric");
   
  
    
    document.getElementById("saveBut").addEventListener("click",saveB,false);
    document.getElementById("cancelBut").addEventListener("click",hideButtons,false);
    
     
     
   var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/course/information?status=2&matric="+matric;
 document.getElementById("bottomSubmit").addEventListener("click",sendRegister,false);
   
    document.getElementById("topSubmit").addEventListener("click",sendRegister,false);
   
   document.getElementById("name").innerHTML = localStorage.getItem("lastName") + "  &nbsp;"+localStorage.getItem("firstName");
      document.getElementById("nameTag").innerHTML = localStorage.getItem("lastName") + "  &nbsp;"+localStorage.getItem("firstName");
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

 

function parseData(asyncRequest){
 
  if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object


 //var data = JSON.parse(asyncRequest.responseText);

 var data = JSON.parse(asyncRequest.responseText);

 
 
var split = data.split("#");

var waec = [];
var neco = [];
var jamb = [];
var post = [];

for(var c = 0; c < split.length; c++){
    
    var seperate = split[c].split(",");
    
   
    
    switch(seperate[1]){
       
        
        case "5":
            waec.push(seperate[0]);
        break;
        case "6":
        neco.push(seperate[0]);
        break;
        case "7":
          jamb.push(seperate[0]);  
          break;
        case "8":
         post.push(seperate[0]);
        break;
        
         
    }
    
}

  
        
        
  
// mytable.row.add([waec[1], 'asdsa34id', neco[2], 'asdsa34id', 'asdsa34id', 'asdsa34id', 'asdsa34id']);


 

var html ="";
 for(var i = 1; i < 9; i++){
     var startTage ="<tr>";
     var tableData = "";
    
      if(waec[i] === undefined ){
      
           tableData+="<td>"+"</td>";     
       
                
     }
     else{
           tableData+="<td><div>"+waec[i]+" </div> <div>  <input type='checkbox' id="+waec[i]+"*WAEC"+"  class='minimal' > </div></td>"; 
     }
     
     if(neco[i] === undefined){
           tableData+="<td>"+"</td>";    
     } else{
            tableData+="<td><div>"+neco[i]+"  </div> <div> <input type='checkbox' id="+neco[i]+"*NECO"+" class='minimal' > </div></td>";
     }
     
     if(jamb[i] === undefined){
           tableData+="<td>"+"</td>";    
     } else{
            tableData+="<td><div>"+jamb[i]+" </div> <div>  <input type='checkbox' id="+jamb[i]+"*JAMB"+" class='minimal' > </div></td>";
     }
     
     if(post[i] === undefined){
           tableData+="<td>"+"</td>";    
           
     }
      else{
            tableData+="<td><div>"+post[i]+" </div> <div>  <input type='checkbox' id="+post[i]+"*UTME"+" class='minimal' > </div></td>";
     }
           
           
     tableData+="<td>0</td>";
      
           
     var endTag = "</tr>";
     
    
    html += startTage + tableData + endTag;
    
  //  alert(waec[i]);
    
   //  mytable.row.add([waec[i], neco[i], jamb[i],post[i]]);
     
     
      
 
 
 }
 

//mytable.draw();

 document.getElementById("registerBody").innerHTML = html;
 

 }
 }
    
    
    var subjectsRegister = [];
    
    function click(e){
        if(e.target.className === "minimal"){
      var loopThrough = subjectsRegister.toString().split(",");
        for(var i = 0; i < loopThrough.length; i++){
            if(loopThrough[i] == e.target.id){
                subjectsRegister.splice(i,1);
        if(subjectsRegister.length == 0){
            document.getElementById("bottomSubmit").className = document.getElementById("bottomSubmit").className + " disabled";
              document.getElementById("topSubmit").className = document.getElementById("topSubmit").className + " disabled";
            }
                return;
            }
        }
          subjectsRegister.push(e.target.id);
        }
        
       
         if(subjectsRegister.length > 0){
            
            document.getElementById("bottomSubmit").className = document.getElementById("bottomSubmit").className.replace(" disabled","");
                 
            document.getElementById("topSubmit").className = document.getElementById("topSubmit").className.replace(" disabled","");
        
        }
         
        
    }
  function saveB(){
       
       
        document.getElementById("load").setAttribute("style","opacity:1.0");
    document.getElementById("example1").setAttribute("style","opacity:0.2");
    document.getElementById("topSubmit").setAttribute("style","opacity:0.2");
    
  
  var matric = localStorage.getItem("matric");
   
  
   var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/student/course/information/?status=1&subjects="+subjectsRegister+"&matric="+matric;
   
 
    try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseDatasP(asyncRequest);  //callBack( asyncRequest );
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
  
  
  function hideButtons(){
         document.getElementById("cancelBut").setAttribute("style","display:none");
         
     document.getElementById("saveBut").setAttribute("style","display:none");
  
  }
  
function sendRegister(){
  
 if(subjectsRegister.length == 0){ $("#myModal").modal();
    
      document.getElementById("popBody").innerHTML = " Please Register at least one subject";
      document.getElementById("myModalLabel").innerHTML = " Register Subject Error";
      
    $("#myModal").modal();
    
    
    return;
       
     
      
 }
 else{
      
     document.getElementById("cancelBut").setAttribute("style","display:block");
      document.getElementById("cancelBut").className = " btn btn-outline pull-left";
     document.getElementById("saveBut").setAttribute("style","display:block; float:right");
       document.getElementById("saveBut").className = " btn btn-outline";
  document.getElementById("myModalLabel").innerHTML = "Confirm Subject Registration";
      
     var list = subjectsRegister.toString().split(",");
     var strings = "<ol>";
     for(var i = 0; i < list.length; i++){
      strings+="<li>"+list[i]+"</li>";   
     }
     strings+="</ol>";
      
     document.getElementById("popBody").innerHTML = "<p>Below are the courses registered </p>"+ strings;
        $("#myModal").modal();
   
     
     return;
     
 }
  
  
}

 
function parseDatasP(asyncRequest){
 
  if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

var data = JSON.parse(asyncRequest.responseText);//  .parse(asyncRequest.responseText);


  
    
 //window.location.assign(sessionStorage.getItem("URL")+"/AAAASTUDENT/DashBoardHome.html");
   
   
  
 //var data = JSON.parse(asyncRequest.responseText);

        
     document.getElementById("load").setAttribute("style","opacity:0.0");
        
         
   window.location.assign(sessionStorage.getItem("URL")+"/AAAASTUDENT/DashBoardHome.html?type=5");
    
   
     
     
       
 }
 }
 

window.addEventListener("load",start,false);
 document.addEventListener("click",click,false);

