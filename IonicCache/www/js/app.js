// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('cache', ['ionic', 'cache.controllers', 'cache.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('cache', {
    url: '/cache',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'cacheCtrl'
  })

  .state('cache.local', {
    url: '/local',
    views: {
      'menuContent': {
        templateUrl: 'templates/Storage/local.html',
        controller: 'localCtrl as local'
      }
    }
  })

  .state('cache.session', {
    url: '/session',
    views: {
      'menuContent': {
        templateUrl: 'templates/Storage/session.html',
        controller: 'sessionCtrl as session'
      }
    }
  })
 
  .state('cache.websql', {
    url: '/websql',
    views: {
      'menuContent': {
        templateUrl: 'templates/Storage/websql.html',
        controller: 'websqlCtrl as sql'
      }
    }
  })

  .state('cache.user', {
    url: '/users',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/Random/users.html',
        controller: 'userCtrl as users'
      }
    }
  })

  .state('cache.list', {
    url: '/list',
    views: {
      'menuContent': {
        templateUrl: 'templates/cachelist.html',
        controller: 'cachelistCtrl as cache'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/cache/list');
  
});
