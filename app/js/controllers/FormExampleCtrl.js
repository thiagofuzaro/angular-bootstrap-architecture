(function() {
    'use strict';

    angular
        .module( 'App' )
        .controller( 'FormExampleCtrl', [ '$scope', 'FormMessages', function( $scope, FormMessages ) {
            $scope.messages = FormMessages;
            $scope.form = {};

            $scope.formSubmit = formSubmit;

            function formSubmit() {
                if ( $scope.mainForm.$valid ) {
                    console.log( 'valid' );
                }
            }
        }]);
}());