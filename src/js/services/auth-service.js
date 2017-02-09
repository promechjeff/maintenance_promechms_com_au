/* jslint strict:true */

angular.module('promechMaintenanceApp')

.service('AuthService', ['$rootScope', '$http', '$q', 'store', 'jwtHelper', 'CONFIG', 'AUTH_EVENTS', 
	function ($rootScope, $http, $q, store, jwtHelper, CONFIG, AUTH_EVENTS) {

		var authService = {},
            apiBaseURL = CONFIG.apiBaseURL,
            jwtName = CONFIG.jwtName,
			currentUser = null;

		authService.login = function (credentials) {
			// return (
			// 	$http({
			// 		url: apiBaseURL + '/auth',
			// 		method: 'POST',
			// 		data: credentials
			// 	})
			// 	.then(function (response) {
			// 		currentUser = response.data.user;
			// 		store.set(jwtName, response.data.id_token);
			// 		$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
			// 		return response;
			// 	})
			// 	.catch(function (response) {
			// 		return $q.reject(response);
			// 	})
			// );
            currentUser = {
                accountID: 1,
                firstName: 'Test',
                surname: 'User',
                email: 'test.user@email.com'
            };
            store.set(jwtName, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50SUQiOiIxIiwiZmlyc3ROYW1lIjoiVGVzdCIsInN1cm5hbWUiOiJVc2VyIiwiZW1haWwiOiJ0ZXN0LnVzZXJAZW1haWwuY29tIiwiZXhwIjoxNDg2NzA0NDc4fQ.7jNhq0kvrgofAUtxDg3tnHRMXCa4y9rzBYXgKv1pz-Q');
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            return true;
		};

		authService.logout = function () {
			store.remove(jwtName);
			currentUser = null;
			$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
			return null;
		};

		authService.currentUser = function () {
			return currentUser;
		};

		authService.initUser = function () {
			if (authService.isAuthenticated()) {
				var jwt = store.get(jwtName);
                currentUser = jwtHelper.decodeToken(jwt);
                authService.refreshUserTokens();
                return true;
			}
			return false;
		}

		authService.isAuthenticated = function() {
            var jwt = store.get(jwtName);
            return !!jwt && !jwtHelper.isTokenExpired(jwt);
        };

        authService.isAuthorized = function(authorizedRoles) {
            var jwt = store.get(jwtName),
                userRoles = [];
            userRoles = !!jwt ? jwtHelper.decodeToken(jwt).roles : [];
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (authService.isAuthenticated() && !!(_.intersection(authorizedRoles, userRoles).length));
        };

        authService.refreshUserTokens = function () {

        }

        authService.on = {};

        authService.on.loginSuccess = function (callback) {
        	$rootScope.$on(AUTH_EVENTS.loginSuccess,callback);
        }

        authService.on.logoutSuccess = function (callback) {
        	$rootScope.$on(AUTH_EVENTS.logoutSuccess,callback);
        }

		return authService;

	}
])

.factory('authInterceptor', ['$q', '$window', '$rootScope', 'AUTH_EVENTS',
    function($q, $window, $rootScope, AUTH_EVENTS) {
        var ftAuthInterceptor = {
            response: function(response) {
                if (response.data && response.data.hasOwnProperty('success') && !response.data.success) {
                    return $q.reject(response);
                }
                return response;
            },
            responseError: function(response) {
                $rootScope.$broadcast({
                    401: AUTH_EVENTS.notAuthenticated,
                    403: AUTH_EVENTS.notAuthorized,
                    419: AUTH_EVENTS.sessionTimeout,
                    440: AUTH_EVENTS.sessionTimeout
                }[response.status], response);
                return $q.reject(response);
            }
        };
        return ftAuthInterceptor;
    }
])

;