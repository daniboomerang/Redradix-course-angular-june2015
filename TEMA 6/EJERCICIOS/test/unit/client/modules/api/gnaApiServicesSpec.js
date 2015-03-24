'use strict';

describe('gnaApiServices', function() {

	var gnaApiService, $rootScope, $httpBackend;

	// excuted before each "it" is run.
	beforeEach(function (){

		module('gnaApiServices');

		// inject services.
		inject(function(_$httpBackend_, _$rootScope_, _gnaApiService_) {
	 		$rootScope = _$rootScope_;
			gnaApiService = _gnaApiService_;
			spyOn($rootScope, '$broadcast').andCallThrough();
			// Set up the mock http service responses
     		$httpBackend = _$httpBackend_;
		});
	
	});
    
    // Triggering the scroll active and inactive sections
    it('should broadcast a random number when the service is started ', function (){
    	var randomNumber = '100';
    	$httpBackend.expectGET('/api/gna/250').respond(randomNumber);
    	gnaApiService.startService(250);
    	$httpBackend.flush();
      	// expected to broadcast the random number
      	expect($rootScope.$broadcast).toHaveBeenCalledWith(gnaApiService.subscriptionEvent(), randomNumber);
    });
});   
