var gnaWithServiceServices = angular.module('gnaWithServiceServices', []);  

/* Creating a new service for aur app */  
gnaWithServiceServices.factory('gnaService', function($rootScope) {

  var SUBSCRIPTION = "event:newRandomNumberServiceModule";

  return {
    subscriptionEvent: function () {
      return SUBSCRIPTION;
    },
    startService: function (mod) {
      function generateRandomNumber (mod){return Math.floor((Math.random() * mod) + 1)}
      $rootScope.$broadcast(SUBSCRIPTION, generateRandomNumber(mod));
    }
  };
});


    