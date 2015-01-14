/* A module for directives */
var gnaApiDirectives = angular.module('gnaApiDirectives', ['gnaApiServices']);	

/* Creating a new directive */	
gnaApiDirectives.directive('gnaApi', function($interval, gnaApiService) {
  return {
    restrict: 'E',
    scope: {},
    template: ' <div id="gna-container" class="container"> ' + 
              ' <h3> GNA Servicio API Externo con MOD {{mod}} e intervalo de tiempo {{interval}} ms</h3> ' +
              '  <button type="submit" class="btn btn-info" ng-click="generateRandomNumber()">Generar Numero Aleatorio</button> ' +
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
        var stop;
        // Don't start a new geeration if we are already running GNA
        if ( angular.isDefined(stop) ) return;
        stop = $interval(function() {
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
                '  <div class="container"> ' +
                '   <gna-api-wrapper></gna-api-wrapper> ' +
                '  </div> ' +
                ' </div> '
  };
});

gnaApiDirectives.directive('foot', function() {
  return {
    restrict: 'E',
    template: ' <footer class="footer navbar-fixed-bottom"> ' +
              '  <div class="footer-row"> ' +
              '   <a href="http://www.meetup.com/Redradix-Weekends/events/219715822/" target="_blank" class="logo-redradix"><i class="fa fa-fw icon-logo-redradix"></i></a> ' +
              '   &nbsp;&nbsp; ' +
              '   & ' +
              '   &nbsp;&nbsp; ' +
              '   <a href="https://angularjs.org/" target="_blank" class="logo-angular"><img src="images/logo-angularjs.svg" alt="AngularJS" class="logo-angular"></a> ' +
              '   &nbsp;&nbsp; ' +
              '   & ' +
              '   &nbsp;&nbsp; ' +
              '   <span class="logo-dboom-wrapper"> ' +
              '    <a href="https://github.com/daniboomerang" target="_blank" ng-mouseenter="spinBoomerang = true" ng-mouseleave="spinBoomerang = false" class="dboom-wrapper logo-dboom"> ' +
              '     <i ng-class="{ ' + "'" + 'faa-spin animated ' + "'" + ': spinBoomerang}" class="fa fa-fw fa-lg icon-logo-dboom"></i> ' +
              '    </a> ' +
              '   </span> ' +   
              '  </div> ' + 
              ' </footer> '
  };
});