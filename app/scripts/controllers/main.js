(function () {
    'use strict';
    /**
     * @ngdoc function
     * @name populllarApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the populllarApp
     */
    angular.module('populllarApp')
        .controller('MainCtrl', function (
            $scope,
            JribbbleFactory
        ) {

            var className = 'MainCtrl';
            console.info(className);

            $scope.isLoadingShots = false;
            $scope.shots = null;
            $scope.searchUser = 'blublu';
            $scope.userIsPopulllar = false;

            JribbbleFactory.initialize();

            $scope.amIPopulllar = function () {
                $scope.isLoadingShots = true;

                JribbbleFactory.getPopularShots().then(function (response) {
                    console.info(className + ' :: getPopularShots');
                    $scope.shots = response;
                    $scope.userIsPopulllar = JribbbleFactory.isPopular($scope.searchUser) + 1;
                }).catch(function (response) {
                    console.error(className + ' :: getPopularShots error');
                }).finally(function () {
                    $scope.isLoadingShots = false;
                });
            };

        });

})();