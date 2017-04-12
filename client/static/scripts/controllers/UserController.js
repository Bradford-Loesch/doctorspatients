app.controller('UserController', ['$scope', '$routeParams', '$location', 'UserFactory', 'ApptFactory', function($scope, $routeParams, $location, UserFactory, ApptFactory) {
    $scope.user = {};

    $scope.get_user = function() {
        UserFactory.get_user().then(function(response) {
            if (response.data.success) {
                $scope.user = response.data.user;
                if ($scope.user.role == 1) {
                    $location.url('/doctor/');
                } else if ($scope.user.role == 0) {
                    $location.url('/patient/' + $scope.user.id);
                }
            } else {
                console.log('no user in session');
                $location.url('/');
            }
        })
    };

    $scope.login = function() {
        UserFactory.login($scope.user).then(function(response) {
            console.log(response.data);
            if (response.data.success) {
                $scope.user = response.data.user;
                if ($scope.user.role == 1) {
                    $location.url('/doctor/');
                } else if ($scope.user.role == 0) {
                    $location.url('/patient/' + $scope.user.id);
                } else {
                    console.log("no role assigned");
                }
            }
        })
    };

    $scope.logout = function() {
        UserFactory.logout().then(function(response) {
            if (response.data.success) {
                $scope.user = {};
                $location.url('/');
            } else {
                console.log(response.data);
            }
        })
    };

    $scope.get_user();
}])