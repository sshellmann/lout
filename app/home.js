import angular from 'angular';
import range from 'lodash.range';

import myButton from './myButton'


const GAMETIME = 30000


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

class HomeController {
    constructor($interval, $scope, $rootScope) {
        this.rootScope = $rootScope;
        this.scope = $scope;
        this.rootScope.interval = $interval;
        this.setup();
    }

    setup() {
        this.rootScope.victory = false;
        this.rootScope.failure = false;
        if (this.rootScope.timerId) {
            this.rootScope.interval.cancel(this.rootScope.timerId);
            this.rootScope.timerId = null;
        }
        this.grid = initArray(5, 5);

        // Lose in 10 minutes
        this.rootScope.countdownTime = GAMETIME;
        this.scope.$watch(this.rootScope.countdownTime);
        this.rootScope.timerId = this.rootScope.interval(this.countdown.bind(this), 1000);
    }

    countdown() {
        if (this.rootScope.countdownTime == 1000) {
            this.rootScope.failure = true;
            this.rootScope.countdownTime = 0;
            this.rootScope.interval.cancel(this.rootScope.timerId);
            this.rootScope.timerId = null;
        }
        else if (this.rootScope.countdownTime > 0) {
            this.rootScope.countdownTime -= 1000;
        }
    }
}

export default angular.module('app.home', [myButton])
    .controller('HomeController', ['$interval', '$scope', '$rootScope', HomeController])
    .name;
