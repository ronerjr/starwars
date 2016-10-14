'use strict';

describe('Controller: SpeciesdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestApp'));

  var SpeciesdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeciesdetailsCtrl = $controller('SpeciesdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpeciesdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
