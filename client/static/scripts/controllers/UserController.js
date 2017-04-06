app.controller('UserController', ['$scope', '$location', 'UserFactory', function($scope, $location, UserFactory) {
    $scope.user = {};
    $scope.patient = {};
    $scope.patient_list = [];

    $scope.index = function() {
        UserFactory.index().then(function(response) {
            if (response.body.success) {
                $scope.patient_list = response.body.patients
            } else {
                console.log(errors);
            }
        })
    };

    $scope.show = function() {
        UserFactory.show().then(function(response) {
            if (response.body.success) {
                $scope.patient = response.body.patient;
                $location.url('#!/doctor/' + $scope.patient.pk);
            } else {
                console.log(errors);
            }
        })
    };

    $scope.update_user = function() {
        UserFactory.update_user($scope.user).then(function(response) {
            if (response.body.success) {
                $scope.user = response.body.user;
            } else {
                console.log(errors);
            }
        })
    };

    $scope.update_address = function() {
        UserFactory.update_user($scope.user.address).then(function(response) {
            if (response.body.success) {
                $scope.user = response.body.user;
            } else {
                console.log(errors);
            }
        })
    };

    $scope.login = function() {
        UserFactory.login($scope.user).then(function(response) {
            if (response.body.success) {
                $scope.user = response.body.user;
                if ($scope.user.role == 'doctor') {
                    $location.url('#!/doctor/');
                } else if ($scope.user.role == 'patient') {
                    $location.url('#!/patient/' + $scope.user.pk);
                } else {
                    console.log("no role assigned");
                }
            }
        })
    };

    $scope.logout = function() {
        UserFactory.logout().then(function(response) {
            $scope.user = {};
            $location.url('/');
        })
    };
}])