'use strict';

/**
 * @ngdoc service
 * @name nodeTestApp.planetfactory
 * @description
 * # planetfactory
 * Factory in the nodeTestApp.
 */
angular.module('nodeTestApp')
  .factory('planetfactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
