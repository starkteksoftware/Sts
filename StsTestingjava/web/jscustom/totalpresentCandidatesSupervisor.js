/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var totalCandidatesSupervisor =[];
function start(){
    arrange();
}
 


function arrange(){
       
  document.getElementById("filterFinds").addEventListener("keydown",keydownMethodIng,false);
   var submit = document.getElementById("clickedFinds");
    submit.addEventListener("click",searchMethodIng,false);
    
 
    
   totalCandidatesSupervisor = [];
    
    
    
      var table = document.getElementById("tableFinds");
     
   
   
 
      
      var sec =  localStorage.getItem("presentTotal").split("#");
      
  
  
  
 
      
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
    
    totalCandidatesSupervisor.push(addition);
    
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


function searchMethodIng(){
    
     
     
     var filt = document.getElementById("filterFinds");
     
     if(filt.length > 0){
         
     }
     else{
       
         
         var sep = totalCandidatesSupervisor.toString();
         
        
         
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
     
  
           document.getElementById("tableFinds").innerHTML = splitAgain[1];   
           
           
         }
      
     }
     
     
     
 }
 
 function keydownMethodIng(e){
    
    
    
     searchMethodIng();
   
     
     
 }
 
 

start();
