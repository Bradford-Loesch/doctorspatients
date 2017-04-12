app.controller('ApptController', ['$scope', '$routeParams', '$location', 'ApptFactory', function($scope, $routeParams, $location, ApptFactory) {
    $scope.appt = {};
    $scope.appt_list = [];

    $scope.index = function() {
        ApptFactory.index().then(function(response) {
            if (response.data.success) {
                $scope.patient_list = response.data.patients
            } else {
                console.log(errors);
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

}])