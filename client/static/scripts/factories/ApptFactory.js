app.factory('ApptFactory', ['$http', function($http) {

    var factory = {};

    factory.index = function() {
        return $http.get('/appts');
    };

    factory.show = function(pk) {
        return $http.get('/appts/' + pk)
    }

    factory.create = function(appt) {
        return $http.post('/appts/')
    }

    factory.update = function(appt) {
        return $http.patch('/appts/', user);
    };

    factory.delete = function(pk) {
        return $http.get('/appts/' + pk);
    };

    return factory;
}])