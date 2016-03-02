/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function arrangeData(){
    
    document.getElementById("tableBodys").innerHTML = localStorage.getItem("pendingExamsTable");
}

arrangeData();


