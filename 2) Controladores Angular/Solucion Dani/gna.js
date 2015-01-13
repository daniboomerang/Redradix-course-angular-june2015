var gnaProgrammed = angular.module('gnaProgrammed', []);        
gnaProgrammed.controller('gnaProgrammedCtrl', function ($scope, $interval){
    
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