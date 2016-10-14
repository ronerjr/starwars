'use strict';

/**
 * @ngdoc service
 * @name nodeTestApp.commonService
 * @description
 * # commonService
 * Service in the nodeTestApp.
 */
angular.module('nodeTestApp')
  .service('commonService', ['commonfactory', commonService]);

function commonService(commonfactory) {
  return{
    url: function(url){
      return commonfactory.url(url);
    },
    details: function(urls) {
      var result = [];
      var i = 0;
      for(i = 0;i < urls.length; i++){
        result[i] = commonfactory.url(urls[i]);
      }
      return result;
    }
  };
}
