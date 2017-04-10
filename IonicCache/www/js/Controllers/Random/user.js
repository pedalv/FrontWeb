angular.module('cache.controllers')
    .controller('userCtrl', [
            '$scope',
            '$stateParams',            
            'usersService',            
        function($scope, $stateParams, usersService) {
            var vm = this;
            vm.users = {};

            function setTotrueCacheOnStateRequest() {
                // It will call only one time during navigation
                //however with F5 the cache will be reset
            }

            function mylocalStorageRequest()  {
                // It will works during navigation and F5
                if(!localStorage.usersrandom) {
                    console.log("get http call");
                    /* Option 1 
                    usersService.getUsersOp1(function(users){                
                        vm.users = users;
                        localStorage.setItem('usersrandom', JSON.stringify(users));
                    });
                    */
                    /* Option 2 */
                    usersService.load()
                        .then(function() {
                            vm.users = usersService.getUsersOp2();
                            localStorage.setItem('usersrandom', JSON.stringify(vm.users));
                    });
                } else {
                    vm.users = JSON.parse(localStorage.usersrandom);
                }
            }
            mylocalStorageRequest();
    }]);