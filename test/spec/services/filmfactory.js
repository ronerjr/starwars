'use strict';

describe('Service: filmfactory', function () {

  // load the service's module
  beforeEach(module('nodeTestApp'));

  // instantiate service
  var filmfactory;
  beforeEach(inject(function (_filmfactory_) {
    filmfactory = _filmfactory_;
  }));

  it('should do something', function () {
    expect(!!filmfactory).toBe(true);
  });

});
