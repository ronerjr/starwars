'use strict';

describe('Controller: VehiclesCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestApp'));

  var VehiclesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VehiclesCtrl = $controller('VehiclesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VehiclesCtrl.awesomeThings.length).toBe(3);
  });
});
