app.controller('DoctorController', ['$scope', '$routeParams', '$location', 'UserFactory', 'ApptFactory', function($scope, $routeParams, $location, UserFactory, ApptFactory) {
    $scope.patient_list = [];
    $scope.appt_list = [];

    $scope.all_patients = function() {
        UserFactory.patient_list().then(function(response) {
            if (response.data.success) {
                $scope.patient_list = response.data.patient_list;
            } else {
                console.log('errors');
            }
        })
    };

    $scope.appt_list = function() {
        ApptFactory.appt_list_doctor().then(function(response) {
            if (response.data.success) {
                $scope.appt_list = response.data.appt_list;
            } else {
                console.log('errors');
            }
        })
    }

    $scope.all_patients();
    $scope.appt_list();
}])