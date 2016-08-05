(function () {
    'use strict';

    angular.module('populllarApp')
        .factory('JribbbleFactory', function (
            $http,
            $q,
            CONFIG,
            CONSTANTS,
            lodash
        ) {

            var className = 'JribbbleFactory';
            console.info(className);

            var shots = [];

            // Public API
            var jribbbleFactory = {
                initialize: initialize,
                isPopular: isPopular,
                getPopularShots: getPopularShots
            };

            return jribbbleFactory;

            function initialize() {
                console.info(className + ' :: initialize');
                $.jribbble.setToken(CONFIG.JRIBBBLE_TOKEN);
            }

            function getPopularShots() {
                console.info(className + ' :: getPopularShots');
                var deferred = $q.defer();

                var params = {};
                params[CONSTANTS.STRING_PER_PAGE] = CONFIG.NB_SHOTS;

                $.jribbble.shots(params).then(
                    function success(response) {
                        console.info(className + ' :: success');
                        shots = response;
                        deferred.resolve(shots);
                    },
                    function error(jqxhr) {
                        // Handle errors
                        console.info(className + ' :: error');
                        deferred.reject(jqxhr);
                    });

                return deferred.promise;
            }

            function isPopular(userName) {
                console.info(className + ' :: isPopular');

                var obj = {
                    'user': {
                        'username': userName
                    }
                };
                return lodash.findIndex(shots, obj);
            }

        });
})();