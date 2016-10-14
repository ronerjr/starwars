'use strict';

describe('Controller: VehiclusdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestApp'));

  var VehiclusdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VehiclusdetailsCtrl = $controller('VehiclusdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VehiclusdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
