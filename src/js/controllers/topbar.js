// jshint strict:true

angular.module('promechMaintenanceApp')

.controller('TopbarController', ['$scope', '$state', 'AuthService', 'CONFIG',
	function ($scope, $state, AuthService, CONFIG) {

		$scope.logout = function () {
			AuthService.logout();
		}

		$scope.getSiteURL = function () {
			return CONFIG.siteBaseURL;
		}

		$scope.currentUser = AuthService.currentUser;
		
	}
])

;
