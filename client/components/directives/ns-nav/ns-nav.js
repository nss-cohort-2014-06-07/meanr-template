(function(){
  'use strict';

  angular.module('meanr')
  .directive('nsNav', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/ns-nav/ns-nav.html';
    o.scope       = {};
    o.controller  = ['$scope', function($scope){
                      $scope.$on('email', function(e, email){
                        $scope.email = email;
                      });
                    }];
    return o;
  }]);
})();

