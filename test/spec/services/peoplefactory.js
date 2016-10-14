'use strict';

describe('Service: peoplefactory', function () {

  // load the service's module
  beforeEach(module('nodeTestApp'));

  // instantiate service
  var peoplefactory;
  beforeEach(inject(function (_peoplefactory_) {
    peoplefactory = _peoplefactory_;
  }));

  it('should do something', function () {
    expect(!!peoplefactory).toBe(true);
  });

});
