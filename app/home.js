import angular from 'angular';
import range from 'lodash.range';
import uirouter from 'angular-ui-router';

import myButton from './myButton'
import homehtml from './home.html'


function initArray(rowCount, colCount) {
    var grid = new Array(rowCount);
    range(rowCount).forEach(function(rowIdx) {
        grid[rowIdx] = new Array(colCount);
        range(colCount).forEach(function(colIdx) {
            // grid[rowIdx][colIdx] = Math.random() >= 0.5;
            grid[rowIdx][colIdx] = false;
        });
    });
    return grid;
}

var routes = ['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        template: homehtml,
        controller: 'HomeController'
    });
}];

class HomeController {
    constructor($timeout) {
        this.grid = initArray(5, 5);
        // Lose in 10 minutes
        $timeout(this.lose, 600000)
    }

    lose() {
        alert("YOU LOSE");
    }
}

export default angular.module('app.home', [uirouter, myButton])
    .config(routes)
    .controller('HomeController', ['$timeout', HomeController])
    .name;
