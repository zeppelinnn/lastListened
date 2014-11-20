'use strict';

describe('Service: lastFM', function () {

  // load the service's module
  beforeEach(module('lastListenedApp'));

  // instantiate service
  var lastFM;
  beforeEach(inject(function (_lastFM_) {
    lastFM = _lastFM_;
  }));

  it('should do something', function () {
    expect(!!lastFM).toBe(true);
  });

});
