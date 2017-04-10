angular.module('cache.controllers')

.controller('sessionCtrl', function($scope, $stateParams) {
	var vm = this;
	vm.hits = -1;

	function incHits() {
        if( sessionStorage.hits ){
            sessionStorage.hits = Number(sessionStorage.hits) + 1;
        }         
        else{
            sessionStorage.hits = 1;
        }
        vm.hits = sessionStorage.hits;
    };

    incHits();
});