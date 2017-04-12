app.controller('ApptController', ['$scope', '$routeParams', '$location', 'ApptFactory', function($scope, $routeParams, $location, ApptFactory) {
    $scope.appt = {};
    $scope.appt_list = [];
    $scope.doctor_list = [];

    $scope.appt_list = function() {
        ApptFactory.appt_list().then(function(response) {
            if (response.data.success) {
                $scope.patient_list = response.data.patients
            } else {
                console.log(errors);
            }
        })
    };

    $scope.doctor_list = function() {
        ApptFactory.doctor_list().then(function() {
            if (response.data.success) {
                $scope.doctor_list = response.data.doctor_list;
            }
        })
    };

    $scope.show = function() {
        ApptFactory.show($routeParams.pk).then(function(response) {
            if (response.data.success) {
                $scope.appt_list = response.data.appt_list;
            } else {
                console.log(errors);
            }
        })
    };

    $scope.create = function() {
        ApptFactory.create($scope.appt).then(function(response) {
            if (response.data.success) {
                $location.url('/patient' + response.data.appt.patient_id);
            }
        })
    };

    $scope.update = function() {
        ApptFactory.update($scope.appt).then(function(response) {

        })
    };

    $scope.destroy = function() {
        ApptFactory.destroy($routeParams.pk).then(function() {
            
        })
    };

    $scope.appt_list();

    // if ($location.url().includes('new_appt')) {
    //     $scope.doctor_list();
    // } else {
    //     // $scope.index();
    //     console.log('failed to find new_appt');
    //     console.log($location.url());
    // }

}])