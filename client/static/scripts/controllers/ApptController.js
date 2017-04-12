app.controller('ApptController', ['$scope', '$routeParams', '$location', 'ApptFactory', function($scope, $routeParams, $location, ApptFactory) {
    $scope.appt = {};
    $scope.appt_list = [];
    $scope.doctor_list = [];

    $scope.index = function() {
        ApptFactory.index().then(function(response) {
            if (response.data.success) {
                $scope.patient_list = response.data.patients
            } else {
                console.log(errors);
            }
        })
    };

    $scope.doctor_list = function() {
        ApptFactory.doctor_list
    }

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

    if ($location.url().includes('new_appt')) {
        $scope.doctor_list();
    } else {
        $scope.index();
    }

}])