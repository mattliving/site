'use strict';

// Declare app level module which depends on filters, and services
var mattliving = angular.module('mattliving', ['mattlivingFilters', 'mattlivingServices', 'mattlivingDirectives', 'ngResource', 'ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/home.html',
      controller: "HomeCtrl"
    })
    .otherwise({redirectTo: '/'});
    return $locationProvider.html5Mode(true);
  }]);