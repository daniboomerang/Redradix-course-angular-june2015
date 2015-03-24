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