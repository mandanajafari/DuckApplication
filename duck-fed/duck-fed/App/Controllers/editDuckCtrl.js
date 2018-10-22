(function () {
    'use strict';
    angular
        .module('app')
        .controller('editDuckCtrl', editDuckCtrl);

    editDuckCtrl.$inject = ['$scope', '$routeParams', '$location', 'duckService'];

    function editDuckCtrl($scope, $routeParams, $location, duckService) {
        $scope.duck = {};
        duckService.getDuckById($routeParams.id).then(function (result) {
            console.log(result);
            $scope.duck = result;
        },
            function () {
                toastr.error('Error in fetching duck');
            })
        $scope.EditDuck = function (duck) {
            duckService.editDuck(duck).then(function(result) {
                console.log(result)
                toastr.success('Duck updated successfully');
                $location.path('/');
            },
            function () {
                toastr.error('Error in updating duck');
            });
        }
    }
})();