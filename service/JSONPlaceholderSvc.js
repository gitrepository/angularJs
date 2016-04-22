angular.module('myApp')
    .factory('JSONPlaceholderSvc', ['$http', function($http) {
        var getUsers = function() {
            return $http
                .get('http://jsonplaceholder.typicode.com/users')
                .then(function(response) {
                console.log('IN Svc')
                    return response.data;
                });
        };

        return {
            getUsers: getUsers
        };
    }]);