/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


arrangeds();
var absentStudents =[];
 function arrangeds(){
     
     document.getElementById("filtersLook").addEventListener("keydown",keydownMethodology,false);
   var submit = document.getElementById("clickedsLook");
    submit.addEventListener("click",searchMethodology,false);
     
    absentStudents = [];
    
    
    
      var table = document.getElementById("tableLook");
     
      
      var sec =  localStorage.getItem("Absentee").split("#");
      
      
 
      
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
  ids= splitted[0]+","+splitted[1]+","+"&nbsp;"+","+split[3]+","+split[1];
           
             
           }
           
    
          // if(i == 3){
           //    ids=split[i];
           //}
           
          
           
        
           
         join+="<td>"+split[i]+"</td>"; 
       }
   
       
       join+=     '<td>  '

                                       +'     <a title="View Student Profile" href="ViewStudentProfile.html" data-hint="Add/Remove Time" class="fg-darkGreen"><i  id="'+ids+'"  class="icon-eye" data-hint="View Exam Details" ></i></a>&nbsp;'
                                        //  +'     <a href="#" data-hint="End Exam Session" class="fg-darkOrange"><i id="'+ids+'" class="icon-flag-2"></i></a>&nbsp;'
                                       //   +'     <a href="#" data-hint="Cancel Exam" class="fg-darkRed"><i id="'+ids+'" class="icon-remove"></i></a>';
         
     var addition ="<tr>";
    
     addition+=join;
      addition+="</tr>";
    
    absentStudents.push(addition);
    
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
 
 
 
 
 
 function searchMethodology(){
    
   
     var filt = document.getElementById("filtersLook");
     
     if(filt.length > 0){
         
     }
     else{
       
         
         var sep = absentStudents.toString();
         
        
         
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
     
  
           document.getElementById("tableLook").innerHTML =splitAgain[1];   
           
         }
      
     }
     
    
}

function keydownMethodology(e){
    
    
    
     searchMethodology();
   
     
     
 }
 
 function profile(e){
         if(e.target.tagName === "I"){
     localStorage.setItem("StudentName",e.target.id);
         }
         
     
 }
 
 document.addEventListener("click",profile,false);