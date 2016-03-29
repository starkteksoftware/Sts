/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myApp', []);
 app.controller('playCtrl', function($scope,$http) {
     var url = sessionStorage.getItem("URL")+"";
    
    // alert(sessionStorage.getItem("secretId") +" logged in ");
     $scope.username = sessionStorage.getItem("user");
     $scope.date = "2 days ago";
     
 });