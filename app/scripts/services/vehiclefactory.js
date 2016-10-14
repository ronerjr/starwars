'use strict';

/**
 * @ngdoc service
 * @name nodeTestApp.vehiclefactory
 * @description
 * # vehiclefactory
 * Factory in the nodeTestApp.
 */
angular.module('nodeTestApp')
  .factory('vehiclefactory', function () {
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
