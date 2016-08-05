'use strict';

/**
 * @ngdoc overview
 * @name populllarApp
 * @description
 * # populllarApp
 *
 * Main module of the application.
 */
angular
    .module('populllarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngLodash'
 ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });