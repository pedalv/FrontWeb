angular.module('cache.controllers')

.controller('localCtrl', function($scope, $stateParams) {
	var vm = this;
	vm.hits = -1;

	function incHits() {
         if( localStorage.hits ){
            localStorage.hits = Number(localStorage.hits) + 1;
         }         
         else{
            localStorage.hits = 1;
         }
         vm.hits = localStorage.hits;
    };

    incHits();
});