/* jslint strict:true */

angular.module('promechMaintenanceApp')

.controller('LoginCtrl', ['$scope', '$state', 'AuthService',
	function ($scope, $state, AuthService) {

		$scope.self = {
			loginError: {},
			hasLoginError: false
		};
		$scope.credentials = {
			email: '',
			password: ''
		};

		$scope.submitLogin = function (credentials) {
			
			$scope.self.hasLoginError = false;
			AuthService.login(credentials)
			// .catch(function (response){
			// 	if (response.data && response.data.error) {
			// 		$scope.self.loginError = response.data.error;
			// 		$scope.self.hasLoginError = true;
			// 	}
			// });
		};
 
	}
])

;