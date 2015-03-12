/* A module for services */
var gnaApiServices = angular.module('gnaApiServices', []);	

/* Creating a new service */
gnaApiServices.factory('gnaApiService', function($rootScope, $http) {

  var SUBSCRIPTION = "event:newRandomNumberApiModule";

  return {
    subscriptionEvent: function () {
      return SUBSCRIPTION;
    },
    startService: function (mod) {
      $http({
        url: '/api/gna/' + mod, 
        method: 'GET'
        }).success(function(randomNumber) {
          $rootScope.$broadcast(SUBSCRIPTION, randomNumber);
        }).error(function() {
          console.log('Error trying to retrieve a random number from external API service.');
      });
    }
  };
});


    