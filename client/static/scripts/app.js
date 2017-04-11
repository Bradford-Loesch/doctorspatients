var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html'
        })
        .when('/dashboard', {
            templateUrl: 'partials/dashboard.html'
        })
        .when('/poll/:id', {
            templateUrl: 'partials/show.html'
        })
        .when('/create', {
            templateUrl: 'partials/create.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
