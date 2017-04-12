app.controller('DoctorController', ['$scope', '$routeParams', '$location', 'UserFactory', function($scope, $routeParams, $location, UserFactory) {
    $scope.patient_list = [];

    $scope.all_patients = function() {
        UserFactory.patient_list().then(function(response) {
            console.log(response.data);
            if (response.data.success) {
                $scope.patient_list = response.data.patient_list;
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

    $scope.all_patients();
}])