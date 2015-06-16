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

/* Añade aqui el router para poder asociar templates a la directiva ng-view */