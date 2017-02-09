/* jshint strict:true */

angular.module('promechMaintenanceApp')

.constant('CONFIG', {
    apiBaseURL: 'http://api.promechms.local',
    siteBaseURL: 'http://maintenance.promechms.local',
    jwtName: 'pm-jwt'
})

.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
})