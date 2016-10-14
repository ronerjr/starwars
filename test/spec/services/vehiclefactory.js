'use strict';

describe('Service: vehiclefactory', function () {

  // load the service's module
  beforeEach(module('nodeTestApp'));

  // instantiate service
  var vehiclefactory;
  beforeEach(inject(function (_vehiclefactory_) {
    vehiclefactory = _vehiclefactory_;
  }));

  it('should do something', function () {
    expect(!!vehiclefactory).toBe(true);
  });

});
