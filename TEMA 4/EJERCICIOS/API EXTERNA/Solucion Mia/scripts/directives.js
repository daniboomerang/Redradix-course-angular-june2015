/* A module for directives */
var gnaApiDirectives = angular.module('gnaApiDirectives', ['gnaApiServices']);	

/* Creating a new directive */	
gnaApiDirectives.directive('gnaApi', function($interval, gnaApiService) {
  return {
    restrict: 'E',
    scope: {},
    template: ' <div id="gna-container"> ' + 
              ' <h3> GNA Servicio API Externo con MOD {{mod}} e intervalo de tiempo {{interval}} ms</h3> ' +
              '  <button type="submit" class="btn btn-default" ng-click="generateRandomNumber()">Generar Numero Aleatorio</button> ' +
              '  <div id="display"> ' +
              '   <div id="random-number"> ' +
              '    <h3> El numero aleatorio generado es: {{randomNumber}} </h3> ' +
              '   </div> ' +
              '  </div> ' +
              ' </div> ',
    link: function (scope, element, attrs) {
      scope.$on(gnaApiService.subscriptionEvent(), function($event, randomNumber){ scope.randomNumber = randomNumber;});
      scope.mod = attrs.mod;
      scope.interval = attrs.interval;
      scope.generateRandomNumber = function() {
        $interval(function() {
          gnaApiService.startService(attrs.mod);
        }, scope.interval);
      };      
    }
  };
});

gnaApiDirectives.directive('gnaApiWrapper', function() {
  return {
    restrict: 'E',
    template: '<gna-api mod="25" interval="500"></gna-api>'
  };
});

gnaApiDirectives.directive('content', function() {
  return {
    restrict: 'E',
    template:   ' <div id="gnas-content"> ' +
                '   <gna-api-wrapper></gna-api-wrapper> ' +
                ' </div> '
  };
});

gnaApiDirectives.directive('foot', function() {
  return {
    restrict: 'E',
    template: ' <footer class="footer navbar-fixed-bottom"> ' +
              '  <div class="footer-row"> ' +
              '   <a href="https://angularjs.org/" target="_blank"><img src="images/logo-angularjs.svg" alt="AngularJS" class="logo-angular"></a> ' +
              '   &nbsp;&nbsp; ' +
              '   & ' +
              '   &nbsp;&nbsp; ' +
              '   <span> ' +
              '    <a href="https://github.com/daniboomerang" target="_blank" ng-mouseenter="spinBoomerang = true" ng-mouseleave="spinBoomerang = false" class="logo-dboom"> ' +
              '     <i ng-class="{ ' + "'" + 'faa-spin animated ' + "'" + ': spinBoomerang}" class="fa fa-fw fa-lg icon-logo-dboom"></i> ' +
              '    </a> ' +
              '   </span> ' + 
              '   <!--<div style="font-size: 0.4em; margin-top: 1%"> This work is licensed under the CC By-SA 3.0 <a href="https://github.com/daniboomerang" target="_blank"> Get it on GitHub </a> -->' +  
              '  </div> ' +
              ' </footer> '
  };
});