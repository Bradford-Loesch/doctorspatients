app.controller('PatientController', ['$scope', '$routeParams', '$location', 'UserFactory', 'ApptFactory', function($scope, $routeParams, $location, UserFactory, ApptFactory) {
    $scope.patient = {};
    $scope.appt_list = [];

    $scope.get_patient = function() {
        UserFactory.show($routeParams.pk).then(function(response) {
            if (response.data.success) {
                $scope.patient = response.data.patient;
            } else {
                console.log(errors);
            }
        })
    };

    $scope.get_appts = function() {
        ApptFactory.appt_list($routeParams.pk).then(function(response) {
            if (response.data.success) {
                $scope.appt_list = response.data.appt_list
            } else {
                console.log(errors);
            }
        })
    }

    $scope.get_patient();
}])