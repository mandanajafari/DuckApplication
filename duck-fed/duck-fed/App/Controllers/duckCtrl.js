(function () {
    'use strict';

    angular
        .module('app')
        .controller('duckCtrl', duckCtrl);

    duckCtrl.$inject = ['$scope', '$http', '$location', 'duckService'];

    function duckCtrl($scope, $http, $location, duckService) {
        $scope.title = 'duckCtrl';
        $scope.ducks = [];
        $scope.reportResult = [];     
        $scope.reportType = {};
  
        $scope.GetAllItems= function () {
            duckService.getAllItems().then(function (result) {
                $scope.ducks = result;             
            })
        }
        $scope.DeleteDuck = function (id) {

            duckService.deleteDuck(id).then(function () {
                toastr.success('Duck deleted successfully');
                $scope.GetAllItems();
            },
             function () {
                 toastr.error('Error in deleting duck');
             });
        }
        $scope.print = function (form) {
            w = window.open();
            w.document.write(form);
            w.print();
            w.close();
        }
        $scope.getDuckByLocation = function (location) {

            duckService.getDuckByLocation(location).then(function (result) {
                console.log(result)
                $scope.ducksByLocation = result;
            })
        }
        $scope.getAllDucks = function () {
            duckService.getAllDucks().then(function (result) {
                $scope.allDucks = result;
              
            })
        }
        $scope.getDuckByTime = function (time) {
            duckService.getDuckByTime(time).then(function (result) {
                $scope.ducksBytime = result;
            })
        }
        $scope.callEveryDay = function (index){
            var duck = $scope.ducks[index];
            var repeatTask = setInterval(duckService.addDuck(duck), 1000*60*60);
            clearInterval(repeatTask)
        }
      
        $scope.getAllDucks();
    }
})();
