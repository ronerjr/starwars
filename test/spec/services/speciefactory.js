'use strict';

describe('Service: speciefactory', function () {

  // load the service's module
  beforeEach(module('nodeTestApp'));

  // instantiate service
  var speciefactory;
  beforeEach(inject(function (_speciefactory_) {
    speciefactory = _speciefactory_;
  }));

  it('should do something', function () {
    expect(!!speciefactory).toBe(true);
  });

});
