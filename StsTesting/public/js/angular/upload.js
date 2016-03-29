/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp', []);
 app.controller('uploadCtrl', function($scope,$http) {
     $scope.user = sessionStorage.getItem("user");
     
     document.getElementById("user").value = sessionStorage.getItem("user");
     
     $scope.subForm = function (){
        if ($scope.myForm.$valid){
            document.getElementById("myForm").submit();
        }
        
     };
     
 });

