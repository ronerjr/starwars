'use strict';

describe('Controller: StarshipdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestApp'));

  var StarshipdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StarshipdetailsCtrl = $controller('StarshipdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StarshipdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
