'use strict';

/**
 * @ngdoc service
 * @name nodeTestApp.peoplefactory
 * @description
 * # peoplefactory
 * Factory in the nodeTestApp.
 */
angular.module('nodeTestApp')
  .factory('peoplefactory', ['$resource', peoplefactory]);

function peoplefactory($resource) {
  return{
    people: function(){
      return $resource('http://swapi.co/api/people/').get();
    }
  };
}
