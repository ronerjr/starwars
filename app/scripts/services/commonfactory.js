'use strict';

/**
 * @ngdoc service
 * @name nodeTestApp.commonfactory
 * @description
 * # commonfactory
 * Factory in the nodeTestApp.
 */
angular.module('nodeTestApp')
  .factory('commonfactory', ['$resource', commonfactory]);

function commonfactory($resource) {
  return {
    url: function(url){
      var result = null;
      if(url !== null){
        result = $resource(url).get();
      }
      return result;
    }
  };
}
