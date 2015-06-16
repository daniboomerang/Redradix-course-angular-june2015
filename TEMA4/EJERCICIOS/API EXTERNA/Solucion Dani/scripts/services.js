/* A module for services */
var gnaApiServices = angular.module('gnaApiServices', []);	

/* Creating a new service */
gnaApiServices.factory('gnaApiService', function($rootScope, $http) {

  var SUBSCRIPTION = "event:newRandomNumber";

  return {
    subscriptionEvent: function () {
      return SUBSCRIPTION;
    },
    startService: function (mod) {
      $http({
        url: 'http://172.19.151.109:3000/api/gna/' + mod, 
        method: 'GET'
        }).success(function(randomNumber) {
          $rootScope.$broadcast(SUBSCRIPTION, randomNumber);
        }).error(function() {
          console.log('Error trying to retrieve a random number from external API service.');
      });
    }
  };
});


    