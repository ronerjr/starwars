'use strict';

/**
 * @ngdoc overview
 * @name nodeTestApp
 * @description
 * # nodeTestApp
 *
 * Main module of the application.
 */
angular
  .module('nodeTestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'people'
      })
      .when('/films', {
        templateUrl: 'views/films.html',
        controller: 'FilmsCtrl',
        controllerAs: 'films'
      })
      .when('/species', {
        templateUrl: 'views/species.html',
        controller: 'SpeciesCtrl',
        controllerAs: 'species'
      })
      .when('/planets', {
        templateUrl: 'views/planets.html',
        controller: 'PlanetsCtrl',
        controllerAs: 'planets'
      })
      .when('/vehicles', {
        templateUrl: 'views/vehicles.html',
        controller: 'VehiclesCtrl',
        controllerAs: 'vehicles'
      })
      .when('/starships', {
        templateUrl: 'views/starships.html',
        controller: 'StarshipsCtrl',
        controllerAs: 'starships'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
