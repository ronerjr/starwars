'use strict';

describe('Controller: FilmsCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestApp'));

  var FilmsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilmsCtrl = $controller('FilmsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FilmsCtrl.awesomeThings.length).toBe(3);
  });
});
