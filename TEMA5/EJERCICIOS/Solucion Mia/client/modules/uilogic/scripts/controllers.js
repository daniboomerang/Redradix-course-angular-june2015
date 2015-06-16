var gnaUIlogicControllers = angular.module('gnaUIlogicControllers', []);	

gnaUIlogicControllers.controller('gnaUIlogicCtrl', function ($scope, $interval){
    function generateRandomNumber (){return Math.floor((Math.random() * 10) + 1)}
    $scope.randomNumber;
    $scope.generateRandomNumber = function() {  
        $interval(function() {
            $scope.randomNumber = generateRandomNumber();
        }, 1000);
    };      
});