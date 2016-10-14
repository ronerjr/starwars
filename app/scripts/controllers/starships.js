'use strict';

/**
 * @ngdoc function
 * @name nodeTestApp.controller:StarshipsCtrl
 * @description
 * # StarshipsCtrl
 * Controller of the nodeTestApp
 */
angular.module('nodeTestApp')
  .controller('StarshipsCtrl', ['$scope', '$mdDialog', 'starshipFactory', 'commonfactory', StarshipsCtrl]);

function StarshipsCtrl($scope, $mdDialog, starshipFactory, commonfactory){
  $scope.data = starshipFactory.starships();

  $scope.otherPage = function(url) {
    	$scope.data = commonfactory.url(url);
  };

  $scope.showAdvanced = function(url) {
    $mdDialog.show({
      controller: StarshipdetailsCtrl,
      templateUrl: 'views/starshipsDetails.html',
      parent: angular.element(document.body),
      locals: {
        url: url
      },
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    });
	};
}
