/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var totalPresentStudents =[];
function start(){
    arrange();
}

function arrange(){
       
  document.getElementById("filterSearch").addEventListener("keydown",keydown,false);
   var submit = document.getElementById("clickedSearch");
    submit.addEventListener("click",search,false);
 
    
   totalPresentStudents = [];
    
    
    
      var table = document.getElementById("tableBodyss");
     
   
   
 
      
      var sec =  localStorage.getItem("activeStudents").split("#");
      
  
  
 
      
     var tableAdd;
     
     
     var addUp;
 
     var ids="";
     
     
     for( var c = 1; c < sec.length; c++){
        
        
        
       var split = sec[c].split(",");
       
  
     var join = "";
   
     
     
       for( var i = 0; i < split.length; i++){
           
           if(i == 0){
              
               join+="<td>"+c+"</td>";
               
               var splitted = split[0].split(" ");
  ids= splitted[0]+","+splitted[1]+","+split[2]+","+split[3]+","+split[1];
           
             
           }
           
    
          // if(i == 3){
           //    ids=split[i];
           //}
           
          
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
   
       
       join+=     '<td>  '

                                       +'     <a href="ViewStudentProfile.html" data-hint="Add/Remove Time" class="fg-darkGreen"><i  id="'+ids+'" class="icon-open" data-hint="View Exam Details" ></i></a>&nbsp;'
                                        //  +'     <a href="#" data-hint="End Exam Session" class="fg-darkOrange"><i id="'+ids+'" class="icon-flag-2"></i></a>&nbsp;'
                                          +'     <a href="#" data-hint="Cancel Exam" class="fg-darkRed"><i id="'+ids+'" class="icon-remove"></i></a>';
         
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
    
     totalPresentStudents.push(addition);
    
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


function search(){
    
     
     
     var filt = document.getElementById("filterSearch");
     
     if(filt.length > 0){
         
     }
     else{
       
         
         var sep = totalPresentStudents.toString();
         
        
         
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
     
  
           document.getElementById("tableBodyss").innerHTML = splitAgain[1];   
           
           
         }
      
     }
     
     
     
 }
 
 function keydown(e){
    
    
    
     search();
   
     
     
 }
 
 

start();