'use strict';

describe('Controller: PlanetsCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestApp'));

  var PlanetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlanetsCtrl = $controller('PlanetsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlanetsCtrl.awesomeThings.length).toBe(3);
  });
});
