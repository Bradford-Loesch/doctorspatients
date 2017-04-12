app.factory('UserFactory', ['$http', function($http) {

    var factory = {};

    factory.patient_list = function() {
        return $http.get('/users/patients');
    };
    
    factory.doctor_list = function() {
        return $http.get('/users/doctors');
    };

    factory.show = function(pk) {
        return $http.get('/users/' + pk);
    };

    factory.get_user = function() {
        return $http.get('/users/');
    };

    factory.login = function(user) {
        return $http.post('/users/', user);
    };

    factory.logout = function() {
        return $http.get('/users/logout');
    };

    return factory;
}])