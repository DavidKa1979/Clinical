app.controller("signupCtrl", function ($scope, $location, userSrv, $log /*,$rootScope*/ ) {

    $scope.invalidLogin = false;
    $scope.email = "";
    $scope.pwd = "";
    $scope.fname = "";

    $scope.signUp = function () {
        if ($scope.fname && $scope.email && $scope.pwd) {   
             
            userSrv.signUp($scope.fname, $scope.email, $scope.pwd).then(function (activeUser) {
                $log.info("Successful signup with: " + JSON.stringify(activeUser));
                $location.path("/recipes");
                //$rootScope.activeUser = activeUser;
            }, function (err) {
                $scope.invalidLogin = true;
            });
        }
    }
})