app.controller("homeCtrl", function($scope, $location, $rootScope) {

    $rootScope.query="";
    $scope.filterMed =function() {
        $location.path("/medicine");
    }
})