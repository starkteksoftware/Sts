/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


    
    var vals =0;
    
    function high(){
 var result = vals+=10;
        highs(result);
        
    }
    
    
    
      
    function highs(value){
        
    
        
        var pb = $("#pro").progressbar();
    pb.progressbar('value', value);
    
    }
    
    function start(){
    
    
        document.getElementById("increase").addEventListener("click",high,false);
      
      
    }
    
    
    window.addEventListener("load",start,false);
    