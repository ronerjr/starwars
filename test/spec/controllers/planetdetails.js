'use strict';

describe('Controller: PlanetdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestApp'));

  var PlanetdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlanetdetailsCtrl = $controller('PlanetdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlanetdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
