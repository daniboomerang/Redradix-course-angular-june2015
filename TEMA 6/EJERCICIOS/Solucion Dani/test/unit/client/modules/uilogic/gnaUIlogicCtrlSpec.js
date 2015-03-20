'use strict';

describe('GNA UILogic Controllers', function() {

    beforeEach(module('gnaUIlogicControllers'));

    var $controller, $interval;

    beforeEach(inject(function(_$controller_, _$interval_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $interval = _$interval_;
    }));

    describe('$scope.generateRandomNumber()', function() {
        var $scope, gnaUIlogicCtrl;
       
        beforeEach(function() {
            $scope = {};
            gnaUIlogicCtrl = $controller('gnaUIlogicCtrl', { $scope: $scope, $interval: $interval });
        });

        it('should return a new randon number', function() {
            expect($scope.randomNumber).not.toBeDefined(); 
            $scope.generateRandomNumber();
            $interval.flush(1000);
            expect($scope.randomNumber).toBeDefined(); 
            console.log($scope.randomNumber);
        });
    });
});
