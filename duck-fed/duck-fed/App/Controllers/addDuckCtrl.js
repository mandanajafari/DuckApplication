(function () {
    'use strict';
    angular
        .module('app')
        .controller('addDuckCtrl', addDuckCtrl);

    addDuckCtrl.$inject = ['$scope', '$location', 'duckService'];
   
    function addDuckCtrl($scope, $location, duckService) {
        $scope.types = [];
        $scope.getTypes = function () {           
            duckService.getTypes().then(function (result) {
                $scope.types=result;
            })
        }
 
        $scope.CreateDuck = function (duck) {
            duckService.addDuck(duck).then(function (result) {
                toastr.success('New record created successfully');
                $location.path('/');
            },
            function () {
                toastr.error('Error in creating duck');
            });
        }
        $scope.getTypes();
    }
})();
