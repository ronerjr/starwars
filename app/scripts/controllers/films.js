'use strict';

/**
 * @ngdoc function
 * @name nodeTestApp.controller:FilmsCtrl
 * @description
 * # FilmsCtrl
 * Controller of the nodeTestApp
 */
angular.module('nodeTestApp')
	.controller('FilmsCtrl', ['$scope','$mdDialog','filmfactory','commonfactory',FilmsCtrl]);

function FilmsCtrl ($scope, $mdDialog, filmfactory, commonfactory) {
	$scope.data = filmfactory.films();

	$scope.otherPage = function(url) {
		$scope.data = commonfactory.url(url);
	};

	$scope.showAdvanced = function(url) {
		$mdDialog.show({
			controller: FilmsdetailsCtrl,
			templateUrl: 'views/filmsDetails.html',
			parent: angular.element(document.body),
			locals: {
				url: url
			},
			clickOutsideToClose:true,
			fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
		});
	};
}
