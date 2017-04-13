app.controller('ApptController', ['$scope', '$routeParams', '$location', 'UserFactory', 'ApptFactory', function($scope, $routeParams, $location, UserFactory, ApptFactory) {
    $scope.appt = {};
    $scope.doctor_list = [];

    $scope.doctor_list = function() {
        UserFactory.doctor_list().then(function(response) {
            if (response.data.success) {
                $scope.doctor_list = response.data.doctor_list;
            }
        })
    };

    $scope.show = function() {
        ApptFactory.show($routeParams.pk).then(function(response) {
            if (response.data.success) {
                $scope.appt = response.data.appt;
                $scope.appt.time = new Date($scope.appt.time);
            } else {
                console.log('errors');
            }
        })
    };

    $scope.create = function() {
        $scope.appt.patient = $routeParams.pk;
        if ($scope.user.role == 1) {
            $scope.appt.doctor = $scope.user.id;
        }
        ApptFactory.create($scope.appt).then(function(response) {
            if (response.data.success) {
                $location.url('/patient/' + $routeParams.pk);
            }
        })
    };

    $scope.update = function() {
        console.log($scope.appt);
        ApptFactory.update($scope.appt, $routeParams.pk).then(function(response) {
            if (response.data.success) {
                $location.url('/patient/' + $scope.appt.patient_id);
            } else {
                console.log('errors');
            }
        })
    };

    $scope.destroy = function() {
        ApptFactory.destroy($routeParams.pk).then(function(response) {
           if (response.data.success) {
                $location.url('/patient/' + $scope.appt.patient_id);
            } else {
                console.log('errors');
            } 
        })
    };


    if ($location.url().includes('new_appt')) {
        $scope.doctor_list();
    } else if ($location.url().includes('appts')) {
        $scope.doctor_list();
        $scope.show();
    }

}])