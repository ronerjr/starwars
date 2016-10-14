'use strict';

describe('Controller: PeopledetaisCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestApp'));

  var PeopledetaisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeopledetaisCtrl = $controller('PeopledetaisCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PeopledetaisCtrl.awesomeThings.length).toBe(3);
  });
});
