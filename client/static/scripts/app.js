var app = angular.module('app', ['ngRoute', 'ngFileUpload']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html'
        })
        .when('/doctor', {
            templateUrl: 'partials/doctor.html'
        })
        .when('/patient/:pk', {
            templateUrl: 'partials/show_patient.html'
        })
        .when('/patient/:pk/new_appt', {
            templateUrl: 'partials/create_appt.html'
        })
        .when('/appts/:pk', {
            templateUrl: 'partials/edit_appt.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
