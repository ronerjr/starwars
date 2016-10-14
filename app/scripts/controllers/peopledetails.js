'use strict';

/**
 * @ngdoc function
 * @name nodeTestApp.controller:PeopledetaisCtrl
 * @description
 * # PeopledetaisCtrl
 * Controller of the nodeTestApp
 */
angular.module('nodeTestApp')
  .controller('PeopledetailsCtrl', ['$scope', '$mdDialog', 'peoplefactory', 'commonService', PeopledetailsCtrl]);

  function PeopledetailsCtrl($scope, $mdDialog, peoplefactory, commonService, url) {
    commonService.url(url).$promise.then(function(data){
      $scope.people = data;

      $scope.species = commonService.details(data.species);

      $scope.starships = commonService.details(data.starships);

      $scope.vehicles = commonService.details(data.vehicles);

      $scope.films = commonService.details(data.films);

      $scope.planet = commonService.url(data.homeworld);      
    });

    $scope.hide = function() {
      $mdDialog.hide();
    };
}
