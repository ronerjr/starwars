'use strict';

/**
 * @ngdoc service
 * @name nodeTestApp.speciefactory
 * @description
 * # speciefactory
 * Factory in the nodeTestApp.
 */
angular.module('nodeTestApp')
  .factory('speciefactory', function () {
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
