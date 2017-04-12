app.factory('ApptFactory', ['$http', function($http) {

    var factory = {};

    factory.appt_list = function(pk) {
        return $http.get('/appts/' + pk);
    };

    factory.show = function(pk) {
        return $http.get('/appts/' + pk)
    };

    factory.create = function(appt) {
        return $http.post('/appts/', appt)
    };

    factory.update = function(appt) {
        return $http.patch('/appts/', user);
    };

    factory.destroy = function(pk) {
        return $http.get('/appts/' + pk);
    };

    return factory;
}])