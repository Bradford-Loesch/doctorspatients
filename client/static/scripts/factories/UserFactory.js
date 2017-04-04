app.factory('UserFactory', ['$http', function($http) {

    var factory = {};

    factory.index = function() {
        return $http.get('/users');
    };

    factory.show = function() {
        return $http.get('/users/' + id)
    }

    factory.login = function(user) {
        return $http.post('/users', user);
    };

    factory.logout = function() {
        return $http.get('/users/logout')
    };

    return factory;
}])