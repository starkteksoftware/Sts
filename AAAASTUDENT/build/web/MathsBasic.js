/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function start(){
    document.getElementById("dic").addEventListener("click",mathf,false);
}
 
 
function mathf(){
      $("#dictionary").modal();
}
window.addEventListener("load",start,false);