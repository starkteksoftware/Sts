/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */                                                                                  

function log(){

      var logins = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";
      var items="";
     var totalStudents = [];
     var totalSubjects = localStorage.getItem("RegStudents");
    var requestUrl = logins+"?subject="+totalSubjects;
     //+ methodAndArguments;
    try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogs(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
 console.log(exception );
 } // end catch
 

 
 function parseLogs( asyncRequest )
 {
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
 items = data;
 try{
 arranged();
 }catch(exc){
     console.log(exc)
 }
  // display data on the page
 } // end if
 }

     function arranged(){
     
     document.getElementById("filters").addEventListener("keydown",keydown,false);
    var submit = document.getElementById("clickeds");
    submit.addEventListener("click",search,false);
     
    totalStudents = [];
       var table = document.getElementById("tableBodys");
       var sec = items.split("#");
       var length = sec.length;
       var remainder= Math.floor(length / 5);
      var nums = 1;
      var stri = "";
      for(var ii = 0; ii <= remainder; ii++){
          stri+='<button class="btn ade btn-info" id="pg'+ii+'" type="button">'+(ii + 1)+'</button>'
      }
      $("#totalPg").html(stri);
      
      $(".ade").click(function (e){
           $(".ade").removeClass("active");
           
              var addUp;
           
           
                 nums =   parseInt(e.target.innerHTML);
                 
                  
                   var val = nums * 5;
                var c = val - 5;
            if(c== 0){
                c=1;
            }
             
                 for( c; c < val; c++){
         if(sec[c] === undefined){
            break;
        }
             
               var split = sec[c].split(",");
       
        
     
     var join = "";
   
     
     
     var sp = split.length;
       for( var i = 0; i < sp; i++){
           
           
           
           
           
       //    var exams = new exam(split[0],split[1],split[2],split[3],split[4]);
           
           
          
         //  var pp =JSON.stringify(exams);
           
           //examination.push(pp);
          
            
              
           if(i == 0){
              
               join+="<td>"+c+"</td>";
               
               var splitted = split[0].split(" ");
          ids= splitted[0]+","+splitted[1]+","+split[2]+","+split[3]+","+split[1];
            }
          join+="<td>"+split[i]+"</td>"; 
         
       }
    
       join+="<td> <a href='ViewStudentProfile.html?matric="+split[3]+"' ><i class='fa fa-user'></i> </a> "+"</td>"; 
        
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
    
     totalStudents.push(addition);
    
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
     
   
  
          
      })
      
        
     var tableAdd;
     var addUp;
     var ids="";
  var val = nums * 5;
     for( var c = nums; c < val; c++){
        
      try{
          //or turn to 1
     var split = sec[c].split(",");
 }
 catch(exc){
                    continue;
 }
       var join = "";
     for( var i = 0; i < split.length; i++){
           
           if(i == 0){
              
               join+="<td>"+c+"</td>";
               
               var splitted = split[0].split(" ");
          ids= splitted[0]+","+splitted[1]+","+split[2]+","+split[3]+","+split[1];
            }
          join+="<td>"+split[i]+"</td>"; 
         
       }
    
      join+="<td> <a href='ViewStudentProfile.html?matric="+split[3]+"' ><i class='fa fa-user'></i> </a> "+"</td>"; 
         
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
    
     totalStudents.push(addition);
    
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
 
 
 
 
 
 function changed(){
    
   
     var filt = document.getElementById("filter");
     
     if(filt.length > 0){
         
     }
     else{
       
         
         var sep = totalStudents.toString();
         
        
         
         var value = filt.value;
         var splitteds =  sep.split(",");
        var check = false;
         var additioned;
         for(var c =0; c < splitteds.length; c++){
             if(splitteds[c].indexOf(value) >0){
              
                 additioned+=splitteds[c];
                 check = true;
             }
         }
         
         if(check){
             var copy;
     var addSplit = additioned.split("undefined");
   for(var ii =0; ii < addSplit.length; ii++){
       if(addSplit[ii].indexOf("undefined") >= 0){
           
       }
       else{
           copy+=addSplit[ii];
           
       }
   }
     
     var splitAgain = copy.split("undefined");
     
  
           document.getElementById("tableBody").innerHTML =splitAgain[1];   
           
         }
      
     }
     
    
}
 
 
 
 function clickedHere(e){
      if(e.target.className =="icon-open"){
         localStorage.setItem("StudentName",e.target.id);
         
        return;
    }
    
    
    if (e.target.className == "icon-remove"){
    
        localStorage.setItem("status","false");
        localStorage.setItem("ScheduleExam","false");
        e.target.setAttribute("style","display:none");
       var seperate = e.target.id.toString().split(",");
       var matric = seperate[3];
       var subject = seperate[4];
       
       
       
     
        unregisterStudentsInHere(matric,subject);
       
      return;
    }
 }
 
  
 
 function unregisterStudentsInHere(matric,subject){
  var unreg = "http://"+localStorage.getItem("Ip")+":8080/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b";

   var requestUrl = unreg+"?matric="+matric+"&examName="+subject;
  
   
 
   
       
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogger(asyncRequest);  //callBack( asyncRequest );
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
 
 
 function parseLogger(){
 
 }
 
 
 function search(){
    
     
     
     var filt = document.getElementById("filters");
     
     if(filt.length > 0){
         
     }
     else{
       
         
         var sep = totalStudents.toString();
         
        
         
         var value = filt.value;
         var splitteds =  sep.split(",");
        var check = false;
         var additioned;
         for(var c =0; c < splitteds.length; c++){
             if(splitteds[c].indexOf(value) >0){
              
                 additioned+=splitteds[c];
                 check = true;
             }
         }
         
         if(check){
             var copy;
     var addSplit = additioned.split("undefined");
   for(var ii =0; ii < addSplit.length; ii++){
       if(addSplit[ii].indexOf("undefined") >= 0){
           
       }
       else{
           copy+=addSplit[ii];
           
       }
   }
     
     var splitAgain = copy.split("undefined");
     
  
           document.getElementById("tableBodys").innerHTML = splitAgain[1];   
           
         }
      
     }
     
     
     
 }
 
 function keydown(e){
    
    
    
     search();
   
     
     
 }
 
 

}
 
 
 
 
 log();

 //document.addEventListener("click",clickedHere,false);
 