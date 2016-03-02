/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function start(){
    
    document.getElementById("submit").addEventListener("click",post,false);
}

function post(){
      document.getElementById("error").innerHTML = "";
    
  var assess =  document.getElementById("assessment").value;
     var type =   document.getElementById("type").value;
     var options = document.getElementById("option").value;
     var authors =  document.getElementById("author").value;
     
    if(assess === "" || type === "" || options === "" || authors === ""){
     
        document.getElementById("error").innerHTML = "All details required";
        return;
    }
    
    
    localStorage.setItem("assessment",assess);
     localStorage.setItem("type",type);
      localStorage.setItem("option",options);
       localStorage.setItem("author",authors);
       
       
       document.getElementById("form").submit();
}

window.addEventListener("load",start,false);