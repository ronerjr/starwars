'use strict';

/**
 * @ngdoc function
 * @name nodeTestApp.controller:StarshipdetailsCtrl
 * @description
 * # StarshipdetailsCtrl
 * Controller of the nodeTestApp
 */
angular.module('nodeTestApp')
  .controller('StarshipdetailsCtrl', ['$mdDialog', '$scope', 'starshipFactory', 'commonService', StarshipdetailsCtrl]);

function StarshipdetailsCtrl($scope, $mdDialog, starshipFactory, commonService, url) {
  commonService.url(url).$promise.then(function(data){
    $scope.starship = data;

    $scope.films = commonService.details(data.films);

    $scope.pilots = commonService.details(data.pilots);
  });

  $scope.hide = function() {
    $mdDialog.hide();
  };
}
