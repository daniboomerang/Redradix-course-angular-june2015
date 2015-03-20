'use strict';

describe('Scroll Observer', function() {

	var scrollObserverService;
	var $rootScope;

	// excuted before each "it" is run.
	beforeEach(function (){

		module('daniboomerangServices');

		// inject services.
		inject(function($injector, _scrollObserverService_) {
	 		$rootScope = $injector.get('$rootScope');	   
			scrollObserverService = _scrollObserverService_;
			spyOn($rootScope, '$broadcast').andCallThrough();
		});
	
	});
    
    // Triggering the scroll active and inactive sections
    it('should be listening when cover becomes active to broadcast ', function (){
    	
    	scrollObserverService.init();

		var mockedElement = angular.element('<a class="navbar-brand btn-social btn-outline active" href="#cover" du-smooth-scroll="" du-scrollspy=""><img src="/images/logo-orange.svg" alt=""></a>');
   		$rootScope.$broadcast('duScrollspy:becameActive', mockedElement);
      	
      	// expected to broadcast the actions to be done when cover becomes active 
      	expect($rootScope.$broadcast).toHaveBeenCalledWith('event:activeArea', 'Cover');
      
    });

	// Triggering the scroll inactive sections
    it('should be listening when cover becomes inactive to broadcast ', function (){
    	
    	scrollObserverService.init();

		var mockedElement = angular.element('<a class="navbar-brand btn-social btn-outline active" href="#cover" du-smooth-scroll="" du-scrollspy=""><img src="/images/logo-orange.svg" alt=""></a>');

		$rootScope.$broadcast('duScrollspy:becameInactive', mockedElement);
		// expected to broadcast the actions to be done when cover becomes inactive 
      	expect($rootScope.$broadcast).toHaveBeenCalledWith('event:inactiveArea', 'Cover');
      
    });
});   

