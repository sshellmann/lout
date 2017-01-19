import angular from 'angular';
import mybuttonhtml from './myButton.html'

import GAMETIME from './home'


function flip(grid, rowIdx, colIdx) {
    grid[rowIdx][colIdx] = !grid[rowIdx][colIdx];
}

class MyButtonController {
    constructor($rootScope) {
        this.rootScope = $rootScope;
    }

    toggle(grid, rowIdx, colIdx) {
        flip(grid, rowIdx, colIdx);
        // Left
        if (colIdx > 0) {
            flip(grid, rowIdx, colIdx-1);
        }
        // Up
        if (rowIdx > 0) {
            flip(grid, rowIdx-1, colIdx);
        }
        // Down
        if (colIdx < grid.length-1) {
            flip(grid, rowIdx, colIdx+1);
        }
        // Right
        if (rowIdx < grid[0].length-1) {
            flip(grid, rowIdx+1, colIdx);
        }
        this.checkVictory(grid);
    }

    checkVictory(grid) {
        if (!this.rootScope.failure) {
            var success = true;
            grid.forEach(function(row) {
                row.forEach(function(col) {
                    success = success && col;
                });
            });
            if (success) {
                this.rootScope.victory = true;
                this.rootScope.interval.cancel(this.rootScope.timerId);
                this.rootScope.timerId = null;
            }
        }
    }
}

export default angular.module('app.mybutton', [])
    .controller('MyButtonController', ['$rootScope', MyButtonController])
    .directive('myButton', function() {
        return {
            template: mybuttonhtml
        }
    })
    .name;
