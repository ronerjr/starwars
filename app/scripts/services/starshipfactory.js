'use strict';

/**
 * @ngdoc service
 * @name nodeTestApp.starshipFactory
 * @description
 * # starshipFactory
 * Factory in the nodeTestApp.
 */
angular.module('nodeTestApp')
  .factory('starshipFactory', ['$resource',starshipFactory]);

function starshipFactory($resource) {
  return{
    starships: function(){
      return $resource('http://swapi.co/api/starships/').get();
    }
  };
}
