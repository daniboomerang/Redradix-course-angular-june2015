/* Our App is an Angular Module */
var GNAApp = angular.module('GNAApp', []);	

/* Creating a new controler for aur app */	
GNAApp.controller('GNACtrl', function ($scope, $interval){
	
	function generateRandomNumber (){return Math.floor((Math.random() * 10) + 1)}
	$scope.randomNumber;
    $scope.generateRandomNumber = function() {
    	var stop;
    	// Don't start a new geeration if we are already running GNA
    	if ( angular.isDefined(stop) ) return;
    	stop = $interval(function() {
    		$scope.randomNumber = generateRandomNumber();
      }, 1000);
    };				
    
});
