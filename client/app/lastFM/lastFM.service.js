'use strict';

angular.module('lastListenedApp')
  .service('lastFM', ['$http', '$q', function ($http, $q) {
    var LAST_FM_BASE = 'http://ws.audioscrobbler.com/2.0/';
    var key = '613ec01bda048ef7a12699a5e09ab5aa';

    this.getTopTracks = function (artist) {
      var defer = $q.defer();
      var url = LAST_FM_BASE + '?method=artist.getTopTracks&api_key=' + key +
        '&format=json' + '&artist=' + artist + '&limit=10';

      $http.get(url, { cache: 'true' }).
        success(function(data, status, headers, config) {
          defer.resolve(data);
        }).
        error(function(data, status, headers, config) {
          console.log("error with status: " + status);
      });

      return defer.promise;
    };

  }]);
