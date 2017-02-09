/* jshint strict:true */

angular.module('promechMaintenanceApp')

.controller('PageCtrl', ['$scope', '$state', '$rootScope', 'AuthService', 'AUTH_EVENTS',
	function($scope, $state, $rootScope, AuthService, AUTH_EVENTS) {
		
		$scope.self = {};

		var updateLoggedIn = function () {
			$scope.isLoggedIn = AuthService.isAuthenticated();
		};

		updateLoggedIn();

		AuthService.on.loginSuccess(updateLoggedIn);
		AuthService.on.logoutSuccess(updateLoggedIn);

        $scope.banner = {
        	show: true,
        	hide: function (banner) {
        		banner.show = false
        	}        		
        }

	}
])