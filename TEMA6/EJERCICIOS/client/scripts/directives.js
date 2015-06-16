var gnasDirectives = angular.module('gnasDirectives', []);

gnasDirectives.directive('topnavbar', function($timeout, $location, $rootScope, $route) {
  return {
    restrict: 'E',  
    scope: {},
    templateUrl: 'views/topnavbar.html',
    link: function (scope, element) {

      var previousActiveModule = undefined;
      var currentActiveModule = undefined;
      var MANUAL = 0, UILOGIC = 1, DIRECTIVE = 2, SERVICE = 3, API = 4;

      init();

      scope.goToModule = function(module){ $location.path(module.URLLink); }

      function init() {

        var currentModuleElementId;
        
        scope.modules = [
          {idLink: 'module-one-idLink', idText:'module-one-text', idIcon: "module-one-idIcon", URLLink: '/manual' ,text:'Manual', number:'1' },
          {idLink: 'module-two-idLink', idText:'module-two-text', idIcon: "module-two-idIcon", URLLink: '/uilogic' ,text:'UIlogic', number:'2' },
          {idLink: 'module-three-idLink', idText:'module-three-text', idIcon: "module-three-idIcon", URLLink: '/directive' ,text:'Directive', number:'3' },
          {idLink: 'module-four-idLink', idText:'module-four-text', idIcon: "module-four-idIcon", URLLink: '/service' ,text:'Service', number:'4' },
          {idLink: 'module-five-idLink', idText:'module-five-text', idIcon: "module-five-idIcon", URLLink: '/api' ,text:'Ext API', number:'5' }
        ];

        $rootScope.$on("$routeChangeSuccess", function (event, current, previous, rejection) {

          function getModuleFromRoute(route) {
              var location = route.$$route.originalPath;
              if (location == scope.modules[MANUAL].URLLink) return scope.modules[MANUAL];
              if (location == scope.modules[UILOGIC].URLLink) return scope.modules[UILOGIC];
              if (location == scope.modules[DIRECTIVE].URLLink) return scope.modules[DIRECTIVE];
              if (location == scope.modules[SERVICE].URLLink) return scope.modules[SERVICE];
              if (location == scope.modules[API].URLLink) return scope.modules[API];
          }
          if (typeof(previousActiveModule) != 'undefined' || previousActiveModule != null) {
            previousActiveModule = getModuleFromRoute(previous);
          }
          currentActiveModule = getModuleFromRoute(current);
          
          if (typeof(previousActiveModule) != 'undefined' || previousActiveModule != null){
            element.find('#' + previousActiveModule.idLink).removeClass ('active');
            element.find('#' + previousActiveModule.idIcon).removeClass ('faa-pulse animated fa-lg');
          }       
          element.find('#' + currentActiveModule.idLink).addClass('active');
          element.find('#' + currentActiveModule.idIcon).addClass('faa-pulse animated fa-lg');

          previousActiveModule = currentActiveModule; 

        });  
      }
    }  
  };
});


gnasDirectives.directive('content', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/content.html'
  };
});

gnasDirectives.directive('foot', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/foot.html'
  };
});