var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html'
        })
        .when('/doctor/:pk', {
            templateUrl: 'partials/dashboard.html'
        })
        .when('/patient/:pk', {
            templateUrl: 'partials/show_patient.html'
        })
        .when('/create', {
            templateUrl: 'partials/create.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
