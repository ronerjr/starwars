'use strict';

describe('Service: planetfactory', function () {

  // load the service's module
  beforeEach(module('nodeTestApp'));

  // instantiate service
  var planetfactory;
  beforeEach(inject(function (_planetfactory_) {
    planetfactory = _planetfactory_;
  }));

  it('should do something', function () {
    expect(!!planetfactory).toBe(true);
  });

});
