'use strict';

angular.module('idle.routing', ['ngRoute'])
angular.module('idle.controller', ['ui.bootstrap'])
angular.module('idle.service', ['ngCookies'])

var app = angular.module('idle', ['idle.routing', 'idle.controller', 'idle.service'])