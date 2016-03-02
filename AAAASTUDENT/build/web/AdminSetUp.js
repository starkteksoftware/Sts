/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var server = location.protocol+"//"+location.hostname+"/AAAACLIENT/webresources/exam/admin/set/password?status=1";

function startServer(){
      try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogs(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST",login, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 alert ( "Request Failed" );
 } // end catch
 
 
 

}

function parseLogs(){

}