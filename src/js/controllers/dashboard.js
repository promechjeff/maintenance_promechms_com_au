//jshint strict:true

angular.module('promechMaintenanceApp')

.controller('DashboardCtrl',['$state',
    function ($state) {

        if ($state.current.name.split('.').pop()=='dashboard') {
            $state.go('dashboard.overview',{},{});
        }

    }
])

.controller('DashboardOverviewCtrl',['$scope', '$state',
    function ($scope, $state) {


    }
])