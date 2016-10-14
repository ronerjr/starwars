'use strict';

/**
 * @ngdoc function
 * @name nodeTestApp.controller:PlanetsCtrl
 * @description
 * # PlanetsCtrl
 * Controller of the nodeTestApp
 */
angular.module('nodeTestApp')
  .controller('PlanetsCtrl', function ($resource, $scope) {
  	 
    var request = $resource('http://swapi.co/api/planets/');
    $scope.resultPlanets = request.get();
  });
