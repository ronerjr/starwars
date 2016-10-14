'use strict';

describe('Controller: SpeciesCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestApp'));

  var SpeciesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeciesCtrl = $controller('SpeciesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpeciesCtrl.awesomeThings.length).toBe(3);
  });
});
