app.controller('PatientController', ['$scope', '$routeParams', '$location', 'Upload', 'UserFactory', 'ApptFactory', 'FileFactory', function($scope, $routeParams, $location, Upload, UserFactory, ApptFactory, FileFactory) {
    $scope.patient = {};
    $scope.appt_list = [];
    $scope.file = {};
    $scope.file_list = [];

    $scope.upload = function() {
        $scope.file.patient_id = $routeParams.pk;
        console.log($scope.file);
        // FileFactory.create($scope.file).then(function(response) {
        //     if (response.data.success) {
        //         $scope.get_files();
        //     } else {
        //         console.log('errors');
        //     }
        // })
    };

    $scope.get_files = function() {
        FileFactory.file_list($routeParams.pk).then(function(response) {
            if (response.data.success) {
                $scope.file_list = response.data.file_list;
            } else {
                console.log('errors');
            }
        })
    };

    $scope.get_patient = function() {
        UserFactory.show($routeParams.pk).then(function(response) {
            if (response.data.success) {
                $scope.patient = response.data.patient;
            } else {
                console.log('errors');
            }
        })
    };

    $scope.get_appts = function() {
        ApptFactory.appt_list($routeParams.pk).then(function(response) {
            if (response.data.success) {
                $scope.appt_list = response.data.appt_list;
            } else {
                console.log('errors');
            }
        })
    };

    $scope.get_patient();
    $scope.get_appts();
    // $scope.get_files();
}])