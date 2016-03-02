/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var str="";
 
 function sendData(){
   
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
       var length = sec.length;
       var remainder= Math.floor(length / 5);
       var nums = 1;
       var stri = "";
       for(var ii = 0; ii <= remainder; ii++){
          stri+='<button class="btn ade btn-info" id="pg'+ii+'" type="button">'+(ii + 1)+'</button>'
      }
       
      $("#serverPg").html(stri);
      $(".ade").click(function (e){
            $(".ade").removeClass("active");
              var val = parseInt(e.target.innerHTML) * 5;
                   var tempTable = "";
                   var c = val - 5;
                    if(c== 0)
                        c=1;
                    
                     for( c; c < val; c++){
                          if(sec[c] === undefined)
                                break;
                            
                   
       var split = sec[c].split(",");
       
      tempTable+="<tr><td>"+c+"</td><td>"+split[0]+"</td><td>"+split[1]+"</td><td>"+split[2]+"</td><td><a href='"+sessionStorage.getItem("URL")+"/AAAACLIENT/FileViewSrc?="+split[0]+"'><i class='fa fa-eye'> </i></a> <a href='"+sessionStorage.getItem("URL")+"/AAAACLIENT/FileViewer?="+split[0]+"' data-hint='Delete' class='fg-darkRed'><i  id='"+split[0]+"'  class='fa fa-download'></i></a>&nbsp;<a><i class='fa fa-remove'></i></a> </td></tr> "
     }
         
   
     
     table.innerHTML = tempTable;
     
     
      
      })
      
      var join = "";
      var val = nums * 5;
     for( var c = nums; c < val; c++){

       var split = sec[c].split(",");
       
      join+="<tr><td>"+c+"</td><td>"+split[0]+"</td><td>"+split[1]+"</td><td>"+split[2]+"</td><td><a href='"+sessionStorage.getItem("URL")+"/AAAACLIENT/FileViewSrc?="+split[0]+"'><i class='fa fa-eye'> </i></a> <a href='"+sessionStorage.getItem("URL")+"/AAAACLIENT/FileViewer?="+split[0]+"' data-hint='Delete' class='fg-darkRed'><i  id='"+split[0]+"'  class='fa fa-download'></i></a>&nbsp;<a><i class='fa fa-remove'></i></a> </td></tr> "
     }
         
   
     
     table.innerHTML = join;
     
       $("#closeMode").trigger("click");
   
     $("#fileTabs").modal();
     
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

sendData();




//document.addEventListener("click",remove,false);