'use strict';

/**
 * @ngdoc service
 * @name nodeTestApp.filmfactory
 * @description
 * # filmfactory
 * Factory in the nodeTestApp.
 */
angular.module('nodeTestApp')
  .factory('filmfactory', ['$resource', filmfactory]);

function filmfactory($resource) {
  return{
    films: function(){
      return $resource('http://swapi.co/api/films/').get();
    },
  };
}
