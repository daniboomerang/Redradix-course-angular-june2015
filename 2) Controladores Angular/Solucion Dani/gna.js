/* Our App is an Angular Module */
var gnaUIlogic = angular.module('gnaUIlogic', []);        

/* Creating a new controler for aur app */  
gnaUIlogic.controller('gnaUIlogicCtrl', function ($scope, $interval){
    
    function generateRandomNumber (){return Math.floor((Math.random() * 10) + 1)}
    var stop;
    $scope.randomNumber;
    $scope.generateRandomNumber = function() {
        // Don't start a new geeration if we are already running GNA
        if ( angular.isDefined(stop) ) return;
            stop = $interval(function() {
            $scope.randomNumber = generateRandomNumber();
        }, 1000);
    };      
});