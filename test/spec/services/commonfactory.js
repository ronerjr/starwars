'use strict';

describe('Service: commonfactory', function () {

  // load the service's module
  beforeEach(module('nodeTestApp'));

  // instantiate service
  var commonfactory;
  beforeEach(inject(function (_commonfactory_) {
    commonfactory = _commonfactory_;
  }));

  it('should do something', function () {
    expect(!!commonfactory).toBe(true);
  });

});
