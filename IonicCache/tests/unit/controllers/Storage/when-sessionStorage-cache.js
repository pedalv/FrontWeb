'use strict';

describe('when sessionStorage cache', function () {
	beforeEach(module(
		'ionic',
		'cache.controllers'));
	var localCtrl;
	beforeEach(inject(function($rootScope, $controller){
		var scope = $rootScope.$new();
		localCtrl = $controller('sessionCtrl', {$scope: scope});
	}));

	it('should be bigger than 0 the number of hits', function(){
		expect(localCtrl.hits).toBeGreaterThan(0);
		//sessionStorage: when browser is close start hits from 1
	});

});	