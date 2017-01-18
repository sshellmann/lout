import angular from 'angular';
import mybuttonhtml from './myButton.html'


function checkVictory(grid) {
    var success = true;
    grid.forEach(function(row) {
        row.forEach(function(col) {
            success = success && col;
        });
    });
    if (success) {
        setTimeout(function() {alert("Success!");}, 1000);
    }
}

function flip(grid, rowIdx, colIdx) {
    grid[rowIdx][colIdx] = !grid[rowIdx][colIdx];
}

class MyButtonController {
    constructor() {
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
        checkVictory(grid);
    }
}

export default angular.module('app.mybutton', [])
    .controller('MyButtonController', ['$scope', MyButtonController])
    .directive('myButton', function() {
        return {
            template: mybuttonhtml
        }
    })
    .name;
