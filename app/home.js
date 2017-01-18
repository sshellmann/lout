import angular from 'angular';
import range from 'lodash.range';
import uirouter from 'angular-ui-router';

import myButton from './myButton'
import homehtml from './home.html'


var routes = ['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        template: homehtml,
        controller: 'HomeController'
    });
}];

class HomeController {
    constructor() {
        this.rows = range(4);
        this.cols = range(4);
    }
}

export default angular.module('app.home', [uirouter, myButton])
    .config(routes)
    .controller('HomeController', [HomeController])
    .name;
