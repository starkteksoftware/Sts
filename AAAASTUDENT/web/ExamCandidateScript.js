/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function arrangeData(){
 document.getElementById("tableBodySE").innerHTML =  localStorage.getItem("RegisteredExam");
}

arrangeData();