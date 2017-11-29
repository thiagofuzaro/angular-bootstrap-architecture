(function() {
    'use strict';

    angular
        .module( 'App' )
        .controller( 'FormExampleCtrl', [ '$scope', 'FormMessages', function( $scope, FormMessages ) {
            // variáveis expostas
            $scope.messages = FormMessages;
            $scope.form = {};
            
            // funções expostas
            $scope.formSubmit = formSubmit;

            function formSubmit() {
                if ( $scope.mainForm.$valid ) {
                    console.log( 'valid' );
                }
            }
        }]);
}());