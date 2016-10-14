'use strict';

/**
 * @ngdoc function
 * @name nodeTestApp.controller:SpeciesCtrl
 * @description
 * # SpeciesCtrl
 * Controller of the nodeTestApp
 */
angular.module('nodeTestApp')
  .controller('SpeciesCtrl', function ($resource, $scope) {
  	 
    var request = $resource('http://swapi.co/api/species/');
    $scope.resultSpecies = request.get();
  });
