app.factory('UserFactory', ['$http', function($http) {

    var factory = {};

    factory.index = function() {
        return $http.get('/users/list');
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
        console.log('factory');
        return $http.get('/users/logout');
    };

    return factory;
}])