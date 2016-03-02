/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var totalStudentsExam = [];

function start(){
    
var login = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/state/register/insert/test/query/student/registerStud/totalStudents";


var requestUrl = login+"?examName="+localStorage.getItem("ExamName");

       try
 {
     var asyncRequest = new XMLHttpRequest(); // create request
     asyncRequest.addEventListener("readystatechange",
     function() { 
            parseLog(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "GET", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );

 asyncRequest.send();
 
 
 
 

 } // end try
 catch ( exception )
 {
 console.log( exception );
 } // end catch
 

  
}

function parseLog( asyncRequest )
 {
   
 
   
 // if request has completed successfully, process the response
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 // convert the JSON string to an Object

 var data = JSON.parse(asyncRequest.responseText);
 
        
       




        arrange(data.toString());
        
        


 // display data on the page
 } // end if
 } //
 
 
 function arrange(str){
     
    
     var table = document.getElementById("regTable");
     var sec = str.split("#");
     var length = sec.length;
     var remainder= Math.floor(length / 10);
     var nums = 1;
     var stri = "";
    
     for(var ii = 0; ii <= remainder; ii++){
          stri+='<button class="btn adew btn-info" id="pg'+ii+'" type="button">'+(ii + 1)+'</button>';
      }
       
      $("#regPg").html(stri);
       $(".adew").click(function (e){
           $(".adew").removeClass("active");
           
           
              var addUp = "";
              nums =   parseInt(e.target.innerHTML);
                 
                  
                   var val = nums * 10;
                var c = val - 10;
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
        
    
       join+= '<td><input class="flat" type="checkbox" />  </td>';       
      
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
    
     totalStudentsExam.push(addition);
    
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
       
      });
      
        
      
      
     
     
     
     
     
     var tableAdd;
     var addUp = "";
 
     var ids="i know";
     var vp = "";
    
     
     sec = str.split("#");
     
      var val = nums * 10;
     for( var c = nums; c < val; c++){
     var split = sec[c].split(",");
     var join = "";
     for( var i = 0; i < split.length; i++){
         if(i == 0){
              
            join+="<td>"+c+"</td>";
            vp =  split[0]+","+split[1]+","+split[2]+","+split[3]+","+split[1];
        }
           
           
           if(i == 3){
               ids=split[i];
           }
           
          
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
   
       
       join+= '<td><input class="flat" type="checkbox" />  </td>';       
         
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
       totalStudentsExam.push(addition);
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
     
     
     
     
     
     
    
     
     table.innerHTML += splitAgain[1];
     
     
     // populateSideBars();
     
     
     
     
     
     
     
 }
 
 start();
 
 
