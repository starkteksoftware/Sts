/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var app = angular.module('myApp', []);
 app.controller('liveCtrl', function($scope,$http) {
     $scope.user = sessionStorage.getItem("user");
     
     document.getElementById("user").value = sessionStorage.getItem("user");
      
     $scope.subForm = function (){
        if ($scope.myForm.$valid){
             
            if($scope.privacy == "2"){
             sessionStorage.setItem("activeTitle",$scope.title);
            sessionStorage.setItem("AddMessage",$scope.message);
            sessionStorage.setItem("description",$scope.description);
            
            window.location.assign("PrivateStream.html");  
            return;
            }
            
            
            sessionStorage.setItem("activeTitle",$scope.title);
            sessionStorage.setItem("AddMessage",$scope.message);
            sessionStorage.setItem("description",$scope.description);
            window.location.assign("LiveStreaming.html");
             
        }
        
     };
     
 });