var app = angular.module("clinicalApp", ["ngRoute", "ngImageInputWithPreview", "ngAnimate", "ngTouch", "ui.bootstrap"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "homeCtrl"
        }).when("/login", {
            templateUrl: "app/login/login.html",
            controller: "loginCtrl"
        }).when("/signup", {

        }).when("/recipes", {
            templateUrl: "app/recipes/recipes.html",
            controller: "recipesCtrl"
        }).when("/new", {

        }).when("/medicine", {
            templateUrl: "app/medicine/medicine.html",
            controller: "medicineCtrl"
            
        }).when("/diagnosis", {
            templateUrl: "app/diagnosis/diagnosis.html",
            controller: "diagnosisCtrl"
        });
})