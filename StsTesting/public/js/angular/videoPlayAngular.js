/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myApp', []);
 app.controller('playCtrl', function($scope,$http) {
     var url = sessionStorage.getItem("URL")+"";
    
     alert(sessionStorage.getItem("secretId") +" logged in ");
     $scope.username = sessionStorage.getItem("user");
     $scope.date = "2 days ago";
     var url = sessionStorage.getItem("URL");
     var videoSrc = document.URL.split("video=");
     document.getElementById("vidDiv").innerHTML = '<video width="320" height="240" controls>'
                     +' <source id="videoSrc" src="'+url+'/ViewFile?file='+videoSrc[1]+'" type="video/mp4">'
                      'Your browser does not support the video tag.'
                       '</video>';
    
       
     
 });