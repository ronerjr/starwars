'use strict';

/**
 * @ngdoc function
 * @name nodeTestApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the nodeTestApp
 */
angular.module('nodeTestApp')
  .controller('PeopleCtrl', ['$scope','$mdDialog','peoplefactory', 'commonfactory', PeopleCtrl]);

function PeopleCtrl ($scope, $mdDialog, peoplefactory, commonfactory) {
	$scope.data = peoplefactory.people();

	$scope.otherPage = function(url) {
		$scope.data = commonfactory.url(url);
	};

	$scope.showAdvanced = function(url) {
		$mdDialog.show({
			controller: PeopledetailsCtrl,
			templateUrl: 'views/peopleDetails.html',
			parent: angular.element(document.body),
			locals: {
				url: url
			},
			clickOutsideToClose:true,
			fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
		});
	};
}
