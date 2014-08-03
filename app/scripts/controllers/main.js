'use strict';

/**
 * @ngdoc function
 * @name planesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the planesApp
 */
angular.module('planesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
