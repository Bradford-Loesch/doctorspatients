applicationCache.factory('FileFactory', ['$http', function($http) {

    factory.file_list = function(pk) {
        return $http.get('/files/patient/' + pk);
    };

    factory.show = function(pk) {
        return $http.get('/files' + pk);
    };

    factory.create = function(file) {
        return $http.post('/files', file);
    };

    factory.destroy = function(pk) {
        return $http.delete('/files/' + pk)
    };
}])