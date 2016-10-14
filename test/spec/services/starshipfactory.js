'use strict';

describe('Service: starshipFactory', function () {

  // load the service's module
  beforeEach(module('nodeTestApp'));

  // instantiate service
  var starshipFactory;
  beforeEach(inject(function (_starshipFactory_) {
    starshipFactory = _starshipFactory_;
  }));

  it('should do something', function () {
    expect(!!starshipFactory).toBe(true);
  });

});
