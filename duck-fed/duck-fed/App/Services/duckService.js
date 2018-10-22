(function () {
    'use strict';

    angular
        .module('app')
        .factory('duckService', duckService);

    duckService.$inject = ['$http', '$q'];

    function duckService($http, $q) {
        var service = {};
        service.getAllItems = function () {
            var deferred = $q.defer();
            $http.get("/Duck/GetAllItems").then(function (result) {
                deferred.resolve(result.data);
                console.log(result.data)
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        }
        service.addDuck = function (duck) {
            var deferred = $q.defer();
            $http.post("/Duck/CreateDuck", duck).then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        }

        service.getDuckById = function (id) {
            var deferred = $q.defer();
            $http.get("/Duck/GetDuckById/" + id).then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        }
        service.getTypes = function () {
            var deferred = $q.defer();
            
            $http.get("/Duck/GetTypes").then(function (result) {
                deferred.resolve(result.data);
                console.log(result.data)
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        }
        service.getDuckByLocation = function () {
            var deferred = $q.defer();

            $http.get("/Duck/GetDuckByLocation").then(function (result) {
                deferred.resolve(result.data);
                console.log(result.data)
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        }
        service.getAllDucks = function () {
            var deferred = $q.defer();

            $http.get("/Duck/GetAllDucks").then(function (result) {
                deferred.resolve(result.data);
                console.log(result.data)
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        }
        service.getDuckByTime = function () {
            var deferred = $q.defer();

            $http.get("/Duck/GetDuckByTime").then(function (result) {
                deferred.resolve(result.data);
                console.log(result.data)
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        }

        service.editDuck = function (duck) {
            var deferred = $q.defer();
            $http.put("/Duck/EditDuck", JSON.stringify(duck)).then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        }

        service.deleteDuck = function (id) {
            var deferred = $q.defer();
            $http.post("/Duck/DeleteDuck", { id: id }).then(function (result) {
                deferred.resolve(result.data);
            }, function () {
                deferred.reject();
            });
            return deferred.promise;
        }

        return service;
    }
})();