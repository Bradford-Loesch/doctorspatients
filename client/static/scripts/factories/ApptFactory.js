app.factory('ApptFactory', ['$http', function($http) {

    var factory = {};

    factory.appt_list_doctor = function() {
        return $http.get('/appts');
    };

    factory.appt_list = function(pk) {
        return $http.get('/appts/patient/' + pk);
    };

    factory.show = function(pk) {
        return $http.get('/appts/' + pk)
    };

    factory.create = function(appt) {
        return $http.post('/appts/', appt)
    };

    factory.update = function(appt, pk) {
        return $http.patch('/appts/' + pk, appt);
    };

    factory.destroy = function(pk) {
        return $http.delete('/appts/' + pk);
    };

    return factory;
}])