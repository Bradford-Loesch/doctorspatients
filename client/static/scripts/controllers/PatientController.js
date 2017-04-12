app.controller('PatientController', ['$scope', '$routeParams', '$location', 'UserFactory', function($scope, $routeParams, $location, UserFactory) {
    $scope.patient = {};
    $scope.patient_list = [];

    $scope.all_patients = function() {
        UserFactory.index().then(function(response) {
            if (response.data.success) {
                $scope.patient_list = response.data.patients
            } else {
                console.log(errors);
            }
        })
    };

    $scope.get_patient = function() {
        UserFactory.show($routeParams.pk).then(function(response) {
            if (response.data.success) {
                $scope.patient = response.data.patient;
            } else {
                console.log(errors);
            }
        })
    };

    $scope.get_patient();
}])