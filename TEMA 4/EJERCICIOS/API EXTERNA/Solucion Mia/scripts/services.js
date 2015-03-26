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
      /* $http here that broadcasts an event */
    }
  };
});


    