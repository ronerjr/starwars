'use strict';

/**
 * @ngdoc function
 * @name nodeTestApp.controller:VehiclesCtrl
 * @description
 * # VehiclesCtrl
 * Controller of the nodeTestApp
 */
angular.module('nodeTestApp')
  .controller('VehiclesCtrl', function ($resource, $scope) {
  	 
    var request = $resource('http://swapi.co/api/vehicles/');
    $scope.resultVehicles = request.get();
  });
