'use strict';

appModule.controller('mainAppCtrl', function($scope, $location) {
        
    // $scope.burl = $location.protocol() + '://' + $location.host() + ':' + $location.port();
    $location.path('/red');
});