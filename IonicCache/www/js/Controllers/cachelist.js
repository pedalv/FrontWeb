angular.module('cache.controllers')

.controller('cachelistCtrl', function($scope) {
	var vm = this;
	vm.lists = [
    	{ title: 'Local Storage', id: 'local' },
    	{ title: 'Session Storage', id: 'session' },
    	{ title: 'WebSQL', id: 'websql' },
    	{ title: 'Random Users', id: 'users' },
  	];
});