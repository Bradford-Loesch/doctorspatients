app.factory('ApptFactory', ['$http', function($http) {

    var factory = {};

    factory.index = function() {
        return $http.get('/appts');
    };

    factory.doctor_list = function() {
        return $http.get('/users/doctors');
    };

    factory.show = function(pk) {
        return $http.get('/appts/' + pk)
    };

    factory.create = function(appt) {
        return $http.post('/appts/')
    };

    factory.update = function(appt) {
        return $http.patch('/appts/', user);
    };

    factory.destroy = function(pk) {
        return $http.get('/appts/' + pk);
    };

    return factory;
}])