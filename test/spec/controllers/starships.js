'use strict';

describe('Controller: StarshipsCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestApp'));

  var StarshipsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StarshipsCtrl = $controller('StarshipsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StarshipsCtrl.awesomeThings.length).toBe(3);
  });
});
