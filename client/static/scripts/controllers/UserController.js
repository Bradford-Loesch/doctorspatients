app.controller('UserController', ['$scope', 'UserFactory', function($scope, UserFactory) {
    $scope.user = {};

    $scope.index = function() {
        UserFactory.index().then(function(response) {
            //do stuff
        })
    };

    $scope.login = function() {
        UserFactory.login($scope.user).then(function(response) {
            //do stuff
        })
    };

    $scope.logout = function() {
        UserFactory.logout().then(function(response) {
            //do stuff
        })
    };
}])