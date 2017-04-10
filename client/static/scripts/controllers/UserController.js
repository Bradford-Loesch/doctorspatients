app.controller('UserController', ['$scope', '$routeParams', '$location', 'UserFactory', 'ApptFactory', function($scope, $routeParams, $location, UserFactory, ApptFactory) {
    $scope.user = {};
    $scope.patient = {};
    $scope.patient_list = [];
    $scope.appt = {};
    $scope.appt_list = [];


    $scope.index = function() {
        UserFactory.index().then(function(response) {
            if (response.body.success) {
                $scope.patient_list = response.body.patients
            } else {
                console.log(errors);
            }
        })
    };

    $scope.get_user = function() {
        UserFactory.show().then(function(response) {
            if (response.body.success) {
                $scope.patient = response.body.patient;
                $location.url('#!/doctor/' + $scope.patient.pk);
            } else {
                console.log(errors);
            }
        })
    };

    $scope.get_appts = function() {
        UserFactory.show($routeParams.pk).then(function(response) {
            if (response.body.success) {
                $scope.appt_list = response.body.appt_list;
            } else {
                console.log(errors);
            }
        })
    };

    $scope.login = function() {
        UserFactory.login($scope.user).then(function(response) {
            if (response.body.success) {
                $scope.user = response.body.user;
                if ($scope.user.role == 1) {
                    $location.url('#!/doctor/');
                } else if ($scope.user.role == 0) {
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


    // $scope.update_user = function() {
    //     UserFactory.update_user($scope.user).then(function(response) {
    //         if (response.body.success) {
    //             $scope.user = response.body.user;
    //         } else {
    //             console.log(errors);
    //         }
    //     })
    // };

    // $scope.update_address = function() {
    //     UserFactory.update_user($scope.user.address).then(function(response) {
    //         if (response.body.success) {
    //             $scope.user = response.body.user;
    //         } else {
    //             console.log(errors);
    //         }
    //     })
    // };
}])