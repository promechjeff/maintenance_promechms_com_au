/* jshint strict:true */

angular.module('promechMaintenanceApp')

.factory('AccountAPI', ['$http', 'CONFIG',
    function($http, CONFIG) {

        var accountAPI = {},
            urlBase = CONFIG.apiBaseURL + '/users';

        function buildQuery(query) {
            var pairs = _.pairs(query),
                queryString = '';
            if (pairs.length !== 0) {
                queryString += '?';
                pairs.forEach(function(pair, idx) {
                    if (idx !== 0) {
                        queryString += '&';
                    }
                    queryString += encodeURIComponent(pair[0]) + '=' + encodeURIComponent(pair[1]);
                });
            }
            return queryString;
        }

        accountAPI.list = function(params, body, query) {
            return $http({
                method: 'GET',
                url: urlBase + buildQuery(query)
            });
        };

        accountAPI.get = function(params, body, query) {
            return $http({
                method: 'GET',
                url: urlBase + '/' + params.accountID + buildQuery(query)
            });
        };

        accountAPI.create = function(params, body, query) {
            return $http({
                method: 'POST',
                url: urlBase + buildQuery(query),
                data: body
            });
        };

        accountAPI.update = function(params, body, query) {
            console.log(params)
            return $http({
                method: 'PUT',
                url: urlBase + '/' + (params.accountID || body.accountID),
                data: body
            });
        };

        accountAPI.delete = function(params, body, query) {
            return $http({
                method: 'DELETE',
                url: urlBase + '/' + (body.accountID || params.accountID)
            });
        };

        accountAPI.updateStatus = function(params, body, query) {
            return $http({
                method: 'PUT',
                url: urlBase + '/' + (params.accountID || '') + '/status',
                data: body
            });
        }

        accountAPI.resendWelcomeEmail = function(params, body, query) {
            return $http({
                method: 'POST',
                url: urlBase + '/' + (params.accountID || '') + '/resendWelcome'
            });
        }

        return accountAPI;

    }
])