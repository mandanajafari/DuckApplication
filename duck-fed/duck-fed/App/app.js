(function () {
    'use strict';
    angular
        .module('app', ['ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider
                      .when('/', {
                          templateUrl: '/app/templates/duck.html',
                          controller: 'duckCtrl'
                      })
                      .when('/addDucks', {
                         controller: 'addDuckCtrl',
                         templateUrl: '/app/templates/addduck.html'
                     })
                     .when('/editDuck/:id', {
                         controller: 'editDuckCtrl',
                         templateUrl: '/app/templates/editduck.html'
                     })
                    .otherwise({
                        redirectTo: '/'
                    });
        });
})();