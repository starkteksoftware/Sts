/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function data(){
    document.getElementById("tableBodySES").innerHTML = localStorage.getItem("AvailableStudents");
}

data();
