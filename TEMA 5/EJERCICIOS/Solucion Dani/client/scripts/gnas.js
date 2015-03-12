'use strict';

angular.module('gnasApp', [
	'ngRoute',
	// GNAs Container
	'gnasDirectives',
	// GNAs Modules
	'gnaUIlogic', 		// UIlogic Module
	'gnaAsDirective',	// As Directive Module
	'gnaWithService',	// Service Module
	'gnaApi'         	// Api Module
])
.config(function($locationProvider, $routeProvider) {
	$routeProvider

            // route for Module GNA Manual
            .when('/manual', { templateUrl : 'modules/manual/views/manual.html'})

            // route for Module GNA Programmed
            .when('/uilogic', { templateUrl : 'modules/uilogic/views/uilogic.html'})

            // route for Module GNA Directive
            .when('/directive', { templateUrl : 'modules/directive/views/directive.html'})

			// route for Module GNA Service
            .when('/service', { templateUrl : 'modules/service/views/service.html'})

            // route for Module GNA External Api
            .when('/api', { templateUrl : 'modules/api/views/external-api.html'})

            // Otherwise -> go to Module GNA Manual
            .otherwise({redirectTo: '/manual'});

    $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
})