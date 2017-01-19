import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular';
import home from './home'

angular.module('app', [home])
    .filter('secondsToDateTime', function() {
        return function(seconds) {
            var d = new Date(0,0,0,0,0,0,0);
            d.setMilliseconds(seconds);
            return d;
        };
    });
