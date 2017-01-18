import angular from 'angular';
import mybuttonhtml from './myButton.html'


class MyButtonController {
    constructor($scope) {
        this.lit = Math.random() >= 0.5;
        $scope.$watch(this.lit);
    }

    toggle() {
        this.lit = !this.lit;
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
