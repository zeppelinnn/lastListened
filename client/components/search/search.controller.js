'use strict';

angular.module('lastListenedApp')
  .controller('SearchCtrl', ['$scope', 'lastFM', function($scope, lastFM) {
    $scope.default = 'Search an artist';
    $scope.results = [];

    $scope.submit = function() {
      if ($scope.search) {
        lastFM.getTopTracks($scope.search).then(function(data) {
          console.log("data from ctrl: ", data);
          $scope.results = data.toptracks.track;
        });
      }
    };

  }]);
