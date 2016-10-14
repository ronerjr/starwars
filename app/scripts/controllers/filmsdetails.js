'use strict';

/**
 * @ngdoc function
 * @name nodeTestApp.controller:FilmsdetailsCtrl
 * @description
 * # FilmsdetailsCtrl
 * Controller of the nodeTestApp
 */
angular.module('nodeTestApp')
  .controller('FilmsdetailsCtrl', ['$scope','$mdDialog','filmfactory','commonService', FilmsdetailsCtrl]);

function FilmsdetailsCtrl($scope, $mdDialog, filmfactory, commonService, url) {
  commonService.url(url).$promise.then(function(data){
    $scope.film = data;

    $scope.species = commonService.details(data.species);

    $scope.starships = commonService.details(data.starships);

    $scope.vehicles = commonService.details(data.vehicles);

    $scope.characters = commonService.details(data.characters);

    $scope.planets = commonService.details(data.planets);
  });

  $scope.hide = function() {
    $mdDialog.hide();
  };
}
