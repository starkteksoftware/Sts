/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var str="";
function start(){
    send();
}
 function send(){
   
      var server = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/admin/set/password?status=";
   var serverSend = server+"5";
   
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
           parseLogInformation(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST",serverSend, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 
  
 }
 
 
   function  parseLogInformation(asyncRequest){
     if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
var data = JSON.parse(asyncRequest.responseText);
str = data;
arrange();
}

   }
   
   function arrange(){
        var table = document.getElementById("tableBodying");
     
     var sec = str.split("#");
   
     var tableAdd;
     
     var addUp;
 
     
     
     
     for( var c = 1; c < sec.length; c++){
        
       var split = sec[c].split(",");
       
      
     var join = "";
     var id="";
    
     
     
       for( var i = 0; i < split.length; i++){
         if(i == 0){
             join+="<td>"+c+"</td>";
             id = split[i]; 
         }
         
        
        
             
         
            
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
       
       join+=  "  <td>  <a href='"+sessionStorage.getItem("URL")+"/AAAACLIENT/FileViewSrc?="+id+"'   data-hint='View File' class='fg-darkBlue'><i id='"+id+"' class='icon-eye'></i></a>&nbsp;<a href='"+sessionStorage.getItem("URL")+"/AAAACLIENT/FileViewer?="+id+"' data-hint='Delete' class='fg-darkRed'><i  id='"+id+"'  class='icon-download-2'></i></a>&nbsp;<a data-hint='Delete' class='fg-darkRed'><i  id='"+id+"'   class='icon-remove'></i></a></td>";
       
       
       
   
           
     var addition ="<tr>";
     
     addition+=join;
      addition+="</tr>";
       addUp+=addition;
      
      
       
         
     }
     
  
     
     
     var copy;
     var addSplit = addUp.split("undefined");
   for(var ii =0; ii < addSplit.length; ii++){
       if(addSplit[ii].indexOf("undefined") >= 0){
           
       }
       else{
           copy+=addSplit[ii];
           
       }
   }
     
     var splitAgain = copy.split("undefined");
     
     
     
     
     
     
     table.innerHTML = splitAgain[1];
     
     
     
   }
   var deleteItem = "";
   function remove(e){
       
       if(e.target.className == "icon-remove"){
     
       
       
       if(confirm('are you sure you want to delete '+e.target.id +'?')){
           
          
           
           var serverSend = sessionStorage.getItem("URL")+"/AAAACLIENT/DeleteFiles?filename="+e.target.id;
           
             var asyncRequest = new XMLHttpRequest(); // create request


 deleteItem = e.target.id;
 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
           parseLogger(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST",serverSend, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 
  
       }
       else{
          
           
       }
       }
   }
   
   
   
   
   function parseLogger(asyncRequest){
       if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
       alert("successfully deleted "+deleteItem);
        
        start();
        
 }
 if(asyncRequest.readyState === 4 && asyncRequest.status === 600 ){
    alert("error");
    
    
 }
 
   }

start();




document.addEventListener("click",remove,false);