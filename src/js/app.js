/* jshint strict:true */

angular.module('promechMaintenanceApp', [
    'ui.router',
    'ui.bootstrap',
    'angular-jwt',
    'angular-storage'
])

.config(['$stateProvider', '$urlRouterProvider', 'jwtInterceptorProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, jwtInterceptorProvider, $httpProvider) {

        // Setup JWT Auth Interceptor
        jwtInterceptorProvider.authHeader = 'X-Authorization';
        jwtInterceptorProvider.tokenGetter = ['store', function(store) {
            return store.get('pm-jwt');
        }];

        $httpProvider.interceptors.push('jwtInterceptor');
        $httpProvider.interceptors.push('authInterceptor');

        // Setup UI-Router
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: 'views/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                data: {
                    requiresLogin: true,
                    authorizedRoles: []
                }
            })
            .state('dashboard.overview', {
                url: 'overview',
                templateUrl: 'views/dashboard/dashboard.overview.html',
                controller: 'DashboardOverviewCtrl',
                data: {
                    requiresLogin: true,
                    authorizedRoles: []
                }
            })
            .state('maintenance', {
                url: '/maintenance',
                templateUrl: 'views/maintenance/maintenance.html',
                controller: 'MaintenanceCtrl',
                data: {
                    requiresLogin: true,
                    authorizedRoles: []
                }
            })
            .state('maintenance.show', {
                url: '/:maintenanceUID',
                templateUrl: 'views/maintenance/maintenance.show.html',
                controller: 'MaintenanceShowCtrl',
                data: {
                    requiresLogin: true,
                    authorizedRoles: []
                }
            })
        ;
    }
])

.run(['AuthService',
    function (AuthService) {
        if (AuthService.isAuthenticated()){
            AuthService.initUser();
        }
    }
])