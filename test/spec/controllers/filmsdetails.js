'use strict';

describe('Controller: FilmsdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestApp'));

  var FilmsdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilmsdetailsCtrl = $controller('FilmsdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FilmsdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
