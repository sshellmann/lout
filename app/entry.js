import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular';
import uirouter from 'angular-ui-router';
import home from './home'

var routing = ['$urlRouterProvider', '$locationProvider', function routing($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}];

angular.module('app', [uirouter, home])
    .config(routing)
